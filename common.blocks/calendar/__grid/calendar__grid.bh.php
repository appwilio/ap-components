<?php

return function ($bh) {
    $bh->match('calendar__grid', function ($ctx, $json) {

        $getGrid = function ($date, $ctx) {
            $getDaysInMonth = function ($year, $month) {
                return date('t', mktime(0, 0, 0, $month, 1, $year));
                //return cal_days_in_month(CAL_GREGORIAN, $month, $year);
            };
            $isDayOfPrevMonth = function ($dayNum, $monthStartDay, $weekNum) {
                return $dayNum < $monthStartDay && $weekNum === 0;
            };
            $grid = array();
            $selected = ($ctx->tParam('selected') !== 'no') ? false : true;

            $year = date('Y');
            $month = date('m');
            $day = date('j');

            $daysOnWeek = 7;
            $daysInMonth = $getDaysInMonth($year, $month);
            $weekOnMonth = ceil($daysInMonth / $daysOnWeek);
            $dayNum = 1;
            $dayOfWeek = date('w');
            $monthEnd = false;
            $weekNum = '';
            $daysCounter = '';
            for ($weekNum = 0; $weekNum <= $weekOnMonth; $weekNum++) {
                $row = array();
                for ($daysCounter = 1; $daysCounter <= $daysOnWeek; $daysCounter++) {
                    $cellState = false;
                    $val = null;
                    if ($isDayOfPrevMonth($daysCounter, $dayOfWeek, $weekNum)) {
                        $dtObj = new DateTime($year.'-'.$month.'-'.$daysCounter);
                        $dtObj->modify('-'.$dayOfWeek + 1 .' day');
                        $val = $dtObj->format('d');
                        $cellState = 'disable';
                    } else {
                        if ($dayNum > $daysInMonth) {
                            $dayNum = 1;
                            $monthEnd = true;
                        }
                        $val = $dayNum++;
                    }
                    $cellState = ($cellState || $monthEnd) ? 'disable' : '';
                    if ($selected && !$isDayOfPrevMonth($daysCounter, $dayOfWeek, $weekNum) && $day === $val && !$monthEnd) {
                        $cellState = 'active';
                    }
                    $row[] = [
                        'elem' => 'cell',
                        'content' => $val,
                        'date' => strtotime($year.'-'.$month.'-'.$val) * 1000,
                        'mods' => ['state' => $cellState],
                    ];
                }
                $grid[] = ['elem' => 'row', 'content' => $row];
            }

            return $grid;
        };
        $grid = $getGrid($ctx->tParam('date'), $ctx);
        $ctx->content($grid, true);
        $ctx->tag('table');
    });
};
