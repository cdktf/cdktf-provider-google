// https://www.terraform.io/docs/providers/google/r/game_services_game_server_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerConfigConfig extends cdktf.TerraformMetaArguments {
  /** A unique id for the deployment config. */
  readonly configId: string;
  /** A unique id for the deployment. */
  readonly deploymentId: string;
  /** The description of the game server config. */
  readonly description?: string;
  /** The labels associated with this game server config. Each label is a
key-value pair. */
  readonly labels?: { [key: string]: string };
  /** Location of the Deployment. */
  readonly location?: string;
  readonly project?: string;
  /** fleet_configs block */
  readonly fleetConfigs: GameServicesGameServerConfigFleetConfigs[];
  /** scaling_configs block */
  readonly scalingConfigs?: GameServicesGameServerConfigScalingConfigs[];
  /** timeouts block */
  readonly timeouts?: GameServicesGameServerConfigTimeouts;
}
export interface GameServicesGameServerConfigFleetConfigs {
  /** The fleet spec, which is sent to Agones to configure fleet.
The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

* fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
* fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'. */
  readonly fleetSpec: string;
  /** The name of the FleetConfig. */
  readonly name?: string;
}

function gameServicesGameServerConfigFleetConfigsToTerraform(struct?: GameServicesGameServerConfigFleetConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fleet_spec: cdktf.stringToTerraform(struct!.fleetSpec),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface GameServicesGameServerConfigScalingConfigsSchedules {
  /** The duration for the cron job event. The duration of the event is effective
after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly cronJobDuration?: string;
  /** The cron definition of the scheduled event. See
https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as
defined by the realm. */
  readonly cronSpec?: string;
  /** The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly endTime?: string;
  /** The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly startTime?: string;
}

function gameServicesGameServerConfigScalingConfigsSchedulesToTerraform(struct?: GameServicesGameServerConfigScalingConfigsSchedules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cron_job_duration: cdktf.stringToTerraform(struct!.cronJobDuration),
    cron_spec: cdktf.stringToTerraform(struct!.cronSpec),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface GameServicesGameServerConfigScalingConfigsSelectors {
  /** Set of labels to group by. */
  readonly labels?: { [key: string]: string };
}

function gameServicesGameServerConfigScalingConfigsSelectorsToTerraform(struct?: GameServicesGameServerConfigScalingConfigsSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
  }
}

export interface GameServicesGameServerConfigScalingConfigs {
  /** Fleet autoscaler spec, which is sent to Agones.
Example spec can be found :
https://agones.dev/site/docs/reference/fleetautoscaler/ */
  readonly fleetAutoscalerSpec: string;
  /** The name of the ScalingConfig */
  readonly name: string;
  /** schedules block */
  readonly schedules?: GameServicesGameServerConfigScalingConfigsSchedules[];
  /** selectors block */
  readonly selectors?: GameServicesGameServerConfigScalingConfigsSelectors[];
}

function gameServicesGameServerConfigScalingConfigsToTerraform(struct?: GameServicesGameServerConfigScalingConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fleet_autoscaler_spec: cdktf.stringToTerraform(struct!.fleetAutoscalerSpec),
    name: cdktf.stringToTerraform(struct!.name),
    schedules: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsSchedulesToTerraform)(struct!.schedules),
    selectors: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsSelectorsToTerraform)(struct!.selectors),
  }
}

export interface GameServicesGameServerConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function gameServicesGameServerConfigTimeoutsToTerraform(struct?: GameServicesGameServerConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class GameServicesGameServerConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesGameServerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configId = config.configId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._fleetConfigs = config.fleetConfigs;
    this._scalingConfigs = config.scalingConfigs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId: string;
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // fleet_configs - computed: false, optional: false, required: true
  private _fleetConfigs: GameServicesGameServerConfigFleetConfigs[];
  public get fleetConfigs() {
    return this.interpolationForAttribute('fleet_configs') as any;
  }
  public set fleetConfigs(value: GameServicesGameServerConfigFleetConfigs[]) {
    this._fleetConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetConfigsInput() {
    return this._fleetConfigs
  }

  // scaling_configs - computed: false, optional: true, required: false
  private _scalingConfigs?: GameServicesGameServerConfigScalingConfigs[];
  public get scalingConfigs() {
    return this.interpolationForAttribute('scaling_configs') as any;
  }
  public set scalingConfigs(value: GameServicesGameServerConfigScalingConfigs[] ) {
    this._scalingConfigs = value;
  }
  public resetScalingConfigs() {
    this._scalingConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigsInput() {
    return this._scalingConfigs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GameServicesGameServerConfigTimeouts ) {
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
      config_id: cdktf.stringToTerraform(this._configId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      fleet_configs: cdktf.listMapper(gameServicesGameServerConfigFleetConfigsToTerraform)(this._fleetConfigs),
      scaling_configs: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsToTerraform)(this._scalingConfigs),
      timeouts: gameServicesGameServerConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
