from django_cron import CronJobBase, Schedule


class Routines:
    RUN_EVERY_MINUTE = 1
    RUN_EVERY_HOUR = 60
    RUN_EVERY_3_HOURS = 180
    RUN_EVERY_6_HOURS = 360
    RUN_EVERY_12_HOURS = 720
    RUN_EVERY_DAY = 1440


class RunCrawlersJob(CronJobBase):
    RUN_EVERY_MINS = Routines.RUN_EVERY_DAY

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'run_crawlers'

    def do(self):
        pass
