// https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSchedulerJobConfig extends cdktf.TerraformMetaArguments {
  /** The deadline for job attempts. If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s" */
  readonly attemptDeadline?: string;
  /** A human-readable description for the job. 
This string must not contain more than 500 characters. */
  readonly description?: string;
  /** The name of the job. */
  readonly name: string;
  readonly project?: string;
  /** Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. */
  readonly region?: string;
  /** Describes the schedule on which the job will be executed. */
  readonly schedule?: string;
  /** Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database. */
  readonly timeZone?: string;
  /** app_engine_http_target block */
  readonly appEngineHttpTarget?: CloudSchedulerJobAppEngineHttpTarget[];
  /** http_target block */
  readonly httpTarget?: CloudSchedulerJobHttpTarget[];
  /** pubsub_target block */
  readonly pubsubTarget?: CloudSchedulerJobPubsubTarget[];
  /** retry_config block */
  readonly retryConfig?: CloudSchedulerJobRetryConfig[];
  /** timeouts block */
  readonly timeouts?: CloudSchedulerJobTimeouts;
}
export interface CloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
  /** App instance.
By default, the job is sent to an instance which is available when the job is attempted. */
  readonly instance?: string;
  /** App service.
By default, the job is sent to the service which is the default service when the job is attempted. */
  readonly service?: string;
  /** App version.
By default, the job is sent to the version which is the default version when the job is attempted. */
  readonly version?: string;
}

function cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform(struct?: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    service: cdktf.stringToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface CloudSchedulerJobAppEngineHttpTarget {
  /** HTTP request body. 
A request body is allowed only if the HTTP method is POST or PUT. 
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string. */
  readonly body?: string;
  /** HTTP request headers.
This map contains the header field names and values. 
Headers can be set when the job is created. */
  readonly headers?: { [key: string]: string };
  /** Which HTTP method to use for the request. */
  readonly httpMethod?: string;
  /** The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL. 
It can contain a path, query string arguments, and \# fragments. 
If the relative URL is empty, then the root path "/" will be used. 
No spaces are allowed, and the maximum length allowed is 2083 characters */
  readonly relativeUri: string;
  /** app_engine_routing block */
  readonly appEngineRouting?: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting[];
}

function cloudSchedulerJobAppEngineHttpTargetToTerraform(struct?: CloudSchedulerJobAppEngineHttpTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    app_engine_routing: cdktf.listMapper(cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform)(struct!.appEngineRouting),
  }
}

export interface CloudSchedulerJobHttpTargetOauthToken {
  /** OAuth scope to be used for generating OAuth access token. If not specified,
"https://www.googleapis.com/auth/cloud-platform" will be used. */
  readonly scope?: string;
  /** Service account email to be used for generating OAuth token.
The service account must be within the same project as the job. */
  readonly serviceAccountEmail: string;
}

function cloudSchedulerJobHttpTargetOauthTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export interface CloudSchedulerJobHttpTargetOidcToken {
  /** Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used. */
  readonly audience?: string;
  /** Service account email to be used for generating OAuth token.
The service account must be within the same project as the job. */
  readonly serviceAccountEmail: string;
}

function cloudSchedulerJobHttpTargetOidcTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export interface CloudSchedulerJobHttpTarget {
  /** HTTP request body. 
A request body is allowed only if the HTTP method is POST, PUT, or PATCH. 
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string. */
  readonly body?: string;
  /** This map contains the header field names and values. 
Repeated headers are not supported, but a header value can contain commas. */
  readonly headers?: { [key: string]: string };
  /** Which HTTP method to use for the request. */
  readonly httpMethod?: string;
  /** The full URI path that the request will be sent to. */
  readonly uri: string;
  /** oauth_token block */
  readonly oauthToken?: CloudSchedulerJobHttpTargetOauthToken[];
  /** oidc_token block */
  readonly oidcToken?: CloudSchedulerJobHttpTargetOidcToken[];
}

function cloudSchedulerJobHttpTargetToTerraform(struct?: CloudSchedulerJobHttpTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    uri: cdktf.stringToTerraform(struct!.uri),
    oauth_token: cdktf.listMapper(cloudSchedulerJobHttpTargetOauthTokenToTerraform)(struct!.oauthToken),
    oidc_token: cdktf.listMapper(cloudSchedulerJobHttpTargetOidcTokenToTerraform)(struct!.oidcToken),
  }
}

export interface CloudSchedulerJobPubsubTarget {
  /** Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute. */
  readonly attributes?: { [key: string]: string };
  /** The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.

 A base64-encoded string. */
  readonly data?: string;
  /** The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'. */
  readonly topicName: string;
}

function cloudSchedulerJobPubsubTargetToTerraform(struct?: CloudSchedulerJobPubsubTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    data: cdktf.stringToTerraform(struct!.data),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}

export interface CloudSchedulerJobRetryConfig {
  /** The maximum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'. */
  readonly maxBackoffDuration?: string;
  /** The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration, 
then doubles maxDoublings times, then increases linearly, 
and finally retries retries at intervals of maxBackoffDuration up to retryCount times. */
  readonly maxDoublings?: number;
  /** The time limit for retrying a failed job, measured from time when an execution was first attempted. 
If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'. */
  readonly maxRetryDuration?: string;
  /** The minimum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'. */
  readonly minBackoffDuration?: string;
  /** The number of attempts that the system will make to run a 
job using the exponential backoff procedure described by maxDoublings.
Values greater than 5 and negative values are not allowed. */
  readonly retryCount?: number;
}

function cloudSchedulerJobRetryConfigToTerraform(struct?: CloudSchedulerJobRetryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_backoff_duration: cdktf.stringToTerraform(struct!.maxBackoffDuration),
    max_doublings: cdktf.numberToTerraform(struct!.maxDoublings),
    max_retry_duration: cdktf.stringToTerraform(struct!.maxRetryDuration),
    min_backoff_duration: cdktf.stringToTerraform(struct!.minBackoffDuration),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
  }
}

export interface CloudSchedulerJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudSchedulerJobTimeoutsToTerraform(struct?: CloudSchedulerJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudSchedulerJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudSchedulerJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_scheduler_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attemptDeadline = config.attemptDeadline;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._schedule = config.schedule;
    this._timeZone = config.timeZone;
    this._appEngineHttpTarget = config.appEngineHttpTarget;
    this._httpTarget = config.httpTarget;
    this._pubsubTarget = config.pubsubTarget;
    this._retryConfig = config.retryConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_deadline - computed: false, optional: true, required: false
  private _attemptDeadline?: string;
  public get attemptDeadline() {
    return this.getStringAttribute('attempt_deadline');
  }
  public set attemptDeadline(value: string ) {
    this._attemptDeadline = value;
  }
  public resetAttemptDeadline() {
    this._attemptDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDeadlineInput() {
    return this._attemptDeadline
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string ) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // app_engine_http_target - computed: false, optional: true, required: false
  private _appEngineHttpTarget?: CloudSchedulerJobAppEngineHttpTarget[];
  public get appEngineHttpTarget() {
    return this.interpolationForAttribute('app_engine_http_target') as any;
  }
  public set appEngineHttpTarget(value: CloudSchedulerJobAppEngineHttpTarget[] ) {
    this._appEngineHttpTarget = value;
  }
  public resetAppEngineHttpTarget() {
    this._appEngineHttpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineHttpTargetInput() {
    return this._appEngineHttpTarget
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget?: CloudSchedulerJobHttpTarget[];
  public get httpTarget() {
    return this.interpolationForAttribute('http_target') as any;
  }
  public set httpTarget(value: CloudSchedulerJobHttpTarget[] ) {
    this._httpTarget = value;
  }
  public resetHttpTarget() {
    this._httpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget
  }

  // pubsub_target - computed: false, optional: true, required: false
  private _pubsubTarget?: CloudSchedulerJobPubsubTarget[];
  public get pubsubTarget() {
    return this.interpolationForAttribute('pubsub_target') as any;
  }
  public set pubsubTarget(value: CloudSchedulerJobPubsubTarget[] ) {
    this._pubsubTarget = value;
  }
  public resetPubsubTarget() {
    this._pubsubTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTargetInput() {
    return this._pubsubTarget
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig?: CloudSchedulerJobRetryConfig[];
  public get retryConfig() {
    return this.interpolationForAttribute('retry_config') as any;
  }
  public set retryConfig(value: CloudSchedulerJobRetryConfig[] ) {
    this._retryConfig = value;
  }
  public resetRetryConfig() {
    this._retryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudSchedulerJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudSchedulerJobTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_deadline: cdktf.stringToTerraform(this._attemptDeadline),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      schedule: cdktf.stringToTerraform(this._schedule),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      app_engine_http_target: cdktf.listMapper(cloudSchedulerJobAppEngineHttpTargetToTerraform)(this._appEngineHttpTarget),
      http_target: cdktf.listMapper(cloudSchedulerJobHttpTargetToTerraform)(this._httpTarget),
      pubsub_target: cdktf.listMapper(cloudSchedulerJobPubsubTargetToTerraform)(this._pubsubTarget),
      retry_config: cdktf.listMapper(cloudSchedulerJobRetryConfigToTerraform)(this._retryConfig),
      timeouts: cloudSchedulerJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
