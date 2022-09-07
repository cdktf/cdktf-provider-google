// https://www.terraform.io/docs/providers/google/r/game_services_game_server_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique id for the deployment config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#config_id GameServicesGameServerConfig#config_id}
  */
  readonly configId: string;
  /**
  * A unique id for the deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#deployment_id GameServicesGameServerConfig#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * The description of the game server config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#description GameServicesGameServerConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#id GameServicesGameServerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this game server config. Each label is a
key-value pair.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#labels GameServicesGameServerConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the Deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#location GameServicesGameServerConfig#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#project GameServicesGameServerConfig#project}
  */
  readonly project?: string;
  /**
  * fleet_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_configs GameServicesGameServerConfig#fleet_configs}
  */
  readonly fleetConfigs: GameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable;
  /**
  * scaling_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#scaling_configs GameServicesGameServerConfig#scaling_configs}
  */
  readonly scalingConfigs?: GameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#timeouts GameServicesGameServerConfig#timeouts}
  */
  readonly timeouts?: GameServicesGameServerConfigTimeouts;
}
export interface GameServicesGameServerConfigFleetConfigs {
  /**
  * The fleet spec, which is sent to Agones to configure fleet.
The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

* fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
* fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_spec GameServicesGameServerConfig#fleet_spec}
  */
  readonly fleetSpec: string;
  /**
  * The name of the FleetConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#name GameServicesGameServerConfig#name}
  */
  readonly name?: string;
}

export function gameServicesGameServerConfigFleetConfigsToTerraform(struct?: GameServicesGameServerConfigFleetConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_spec: cdktf.stringToTerraform(struct!.fleetSpec),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GameServicesGameServerConfigFleetConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GameServicesGameServerConfigFleetConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetSpec = this._fleetSpec;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerConfigFleetConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fleetSpec = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fleetSpec = value.fleetSpec;
      this._name = value.name;
    }
  }

  // fleet_spec - computed: false, optional: false, required: true
  private _fleetSpec?: string; 
  public get fleetSpec() {
    return this.getStringAttribute('fleet_spec');
  }
  public set fleetSpec(value: string) {
    this._fleetSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetSpecInput() {
    return this._fleetSpec;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class GameServicesGameServerConfigFleetConfigsList extends cdktf.ComplexList {
  public internalValue? : GameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GameServicesGameServerConfigFleetConfigsOutputReference {
    return new GameServicesGameServerConfigFleetConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameServicesGameServerConfigScalingConfigsSchedules {
  /**
  * The duration for the cron job event. The duration of the event is effective
after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#cron_job_duration GameServicesGameServerConfig#cron_job_duration}
  */
  readonly cronJobDuration?: string;
  /**
  * The cron definition of the scheduled event. See
https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as
defined by the realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#cron_spec GameServicesGameServerConfig#cron_spec}
  */
  readonly cronSpec?: string;
  /**
  * The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#end_time GameServicesGameServerConfig#end_time}
  */
  readonly endTime?: string;
  /**
  * The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#start_time GameServicesGameServerConfig#start_time}
  */
  readonly startTime?: string;
}

export function gameServicesGameServerConfigScalingConfigsSchedulesToTerraform(struct?: GameServicesGameServerConfigScalingConfigsSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_job_duration: cdktf.stringToTerraform(struct!.cronJobDuration),
    cron_spec: cdktf.stringToTerraform(struct!.cronSpec),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class GameServicesGameServerConfigScalingConfigsSchedulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GameServicesGameServerConfigScalingConfigsSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronJobDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobDuration = this._cronJobDuration;
    }
    if (this._cronSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSpec = this._cronSpec;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerConfigScalingConfigsSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronJobDuration = undefined;
      this._cronSpec = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronJobDuration = value.cronJobDuration;
      this._cronSpec = value.cronSpec;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // cron_job_duration - computed: false, optional: true, required: false
  private _cronJobDuration?: string; 
  public get cronJobDuration() {
    return this.getStringAttribute('cron_job_duration');
  }
  public set cronJobDuration(value: string) {
    this._cronJobDuration = value;
  }
  public resetCronJobDuration() {
    this._cronJobDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobDurationInput() {
    return this._cronJobDuration;
  }

  // cron_spec - computed: false, optional: true, required: false
  private _cronSpec?: string; 
  public get cronSpec() {
    return this.getStringAttribute('cron_spec');
  }
  public set cronSpec(value: string) {
    this._cronSpec = value;
  }
  public resetCronSpec() {
    this._cronSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronSpecInput() {
    return this._cronSpec;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class GameServicesGameServerConfigScalingConfigsSchedulesList extends cdktf.ComplexList {
  public internalValue? : GameServicesGameServerConfigScalingConfigsSchedules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GameServicesGameServerConfigScalingConfigsSchedulesOutputReference {
    return new GameServicesGameServerConfigScalingConfigsSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameServicesGameServerConfigScalingConfigsSelectors {
  /**
  * Set of labels to group by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#labels GameServicesGameServerConfig#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function gameServicesGameServerConfigScalingConfigsSelectorsToTerraform(struct?: GameServicesGameServerConfigScalingConfigsSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class GameServicesGameServerConfigScalingConfigsSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GameServicesGameServerConfigScalingConfigsSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerConfigScalingConfigsSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class GameServicesGameServerConfigScalingConfigsSelectorsList extends cdktf.ComplexList {
  public internalValue? : GameServicesGameServerConfigScalingConfigsSelectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GameServicesGameServerConfigScalingConfigsSelectorsOutputReference {
    return new GameServicesGameServerConfigScalingConfigsSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameServicesGameServerConfigScalingConfigs {
  /**
  * Fleet autoscaler spec, which is sent to Agones.
Example spec can be found :
https://agones.dev/site/docs/reference/fleetautoscaler/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_autoscaler_spec GameServicesGameServerConfig#fleet_autoscaler_spec}
  */
  readonly fleetAutoscalerSpec: string;
  /**
  * The name of the ScalingConfig
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#name GameServicesGameServerConfig#name}
  */
  readonly name: string;
  /**
  * schedules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#schedules GameServicesGameServerConfig#schedules}
  */
  readonly schedules?: GameServicesGameServerConfigScalingConfigsSchedules[] | cdktf.IResolvable;
  /**
  * selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#selectors GameServicesGameServerConfig#selectors}
  */
  readonly selectors?: GameServicesGameServerConfigScalingConfigsSelectors[] | cdktf.IResolvable;
}

export function gameServicesGameServerConfigScalingConfigsToTerraform(struct?: GameServicesGameServerConfigScalingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_autoscaler_spec: cdktf.stringToTerraform(struct!.fleetAutoscalerSpec),
    name: cdktf.stringToTerraform(struct!.name),
    schedules: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsSchedulesToTerraform, true)(struct!.schedules),
    selectors: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsSelectorsToTerraform, true)(struct!.selectors),
  }
}

export class GameServicesGameServerConfigScalingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GameServicesGameServerConfigScalingConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetAutoscalerSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetAutoscalerSpec = this._fleetAutoscalerSpec;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerConfigScalingConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fleetAutoscalerSpec = undefined;
      this._name = undefined;
      this._schedules.internalValue = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fleetAutoscalerSpec = value.fleetAutoscalerSpec;
      this._name = value.name;
      this._schedules.internalValue = value.schedules;
      this._selectors.internalValue = value.selectors;
    }
  }

  // fleet_autoscaler_spec - computed: false, optional: false, required: true
  private _fleetAutoscalerSpec?: string; 
  public get fleetAutoscalerSpec() {
    return this.getStringAttribute('fleet_autoscaler_spec');
  }
  public set fleetAutoscalerSpec(value: string) {
    this._fleetAutoscalerSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetAutoscalerSpecInput() {
    return this._fleetAutoscalerSpec;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new GameServicesGameServerConfigScalingConfigsSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: GameServicesGameServerConfigScalingConfigsSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new GameServicesGameServerConfigScalingConfigsSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: GameServicesGameServerConfigScalingConfigsSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}

export class GameServicesGameServerConfigScalingConfigsList extends cdktf.ComplexList {
  public internalValue? : GameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GameServicesGameServerConfigScalingConfigsOutputReference {
    return new GameServicesGameServerConfigScalingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameServicesGameServerConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#create GameServicesGameServerConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#delete GameServicesGameServerConfig#delete}
  */
  readonly delete?: string;
}

export function gameServicesGameServerConfigTimeoutsToTerraform(struct?: GameServicesGameServerConfigTimeoutsOutputReference | GameServicesGameServerConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GameServicesGameServerConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config google_game_services_game_server_config}
*/
export class GameServicesGameServerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_game_services_game_server_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config google_game_services_game_server_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameServicesGameServerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GameServicesGameServerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._fleetConfigs.internalValue = config.fleetConfigs;
    this._scalingConfigs.internalValue = config.scalingConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
    return this._project;
  }

  // fleet_configs - computed: false, optional: false, required: true
  private _fleetConfigs = new GameServicesGameServerConfigFleetConfigsList(this, "fleet_configs", false);
  public get fleetConfigs() {
    return this._fleetConfigs;
  }
  public putFleetConfigs(value: GameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable) {
    this._fleetConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetConfigsInput() {
    return this._fleetConfigs.internalValue;
  }

  // scaling_configs - computed: false, optional: true, required: false
  private _scalingConfigs = new GameServicesGameServerConfigScalingConfigsList(this, "scaling_configs", false);
  public get scalingConfigs() {
    return this._scalingConfigs;
  }
  public putScalingConfigs(value: GameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable) {
    this._scalingConfigs.internalValue = value;
  }
  public resetScalingConfigs() {
    this._scalingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigsInput() {
    return this._scalingConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GameServicesGameServerConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GameServicesGameServerConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.stringToTerraform(this._configId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      fleet_configs: cdktf.listMapper(gameServicesGameServerConfigFleetConfigsToTerraform, true)(this._fleetConfigs.internalValue),
      scaling_configs: cdktf.listMapper(gameServicesGameServerConfigScalingConfigsToTerraform, true)(this._scalingConfigs.internalValue),
      timeouts: gameServicesGameServerConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
