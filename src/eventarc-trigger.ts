// https://www.terraform.io/docs/providers/google/r/eventarc_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventarcTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#id EventarcTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. User labels attached to the triggers that can be used to group resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#labels EventarcTrigger#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#location EventarcTrigger#location}
  */
  readonly location: string;
  /**
  * Required. The resource name of the trigger. Must be unique within the location on the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#name EventarcTrigger#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#project EventarcTrigger#project}
  */
  readonly project?: string;
  /**
  * Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#service_account EventarcTrigger#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#destination EventarcTrigger#destination}
  */
  readonly destination: EventarcTriggerDestination;
  /**
  * matching_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}
  */
  readonly matchingCriteria: EventarcTriggerMatchingCriteria[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#timeouts EventarcTrigger#timeouts}
  */
  readonly timeouts?: EventarcTriggerTimeouts;
  /**
  * transport block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#transport EventarcTrigger#transport}
  */
  readonly transport?: EventarcTriggerTransport;
}
export interface EventarcTriggerDestinationCloudRunService {
  /**
  * Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#path EventarcTrigger#path}
  */
  readonly path?: string;
  /**
  * Required. The region the Cloud Run service is deployed in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#region EventarcTrigger#region}
  */
  readonly region?: string;
  /**
  * Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#service EventarcTrigger#service}
  */
  readonly service: string;
}

export function eventarcTriggerDestinationCloudRunServiceToTerraform(struct?: EventarcTriggerDestinationCloudRunServiceOutputReference | EventarcTriggerDestinationCloudRunService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class EventarcTriggerDestinationCloudRunServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerDestinationCloudRunService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerDestinationCloudRunService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._region = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._region = value.region;
      this._service = value.service;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface EventarcTriggerDestinationGke {
  /**
  * Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#cluster EventarcTrigger#cluster}
  */
  readonly cluster: string;
  /**
  * Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#location EventarcTrigger#location}
  */
  readonly location: string;
  /**
  * Required. The namespace the GKE service is running in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#namespace EventarcTrigger#namespace}
  */
  readonly namespace: string;
  /**
  * Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#path EventarcTrigger#path}
  */
  readonly path?: string;
  /**
  * Required. Name of the GKE service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#service EventarcTrigger#service}
  */
  readonly service: string;
}

export function eventarcTriggerDestinationGkeToTerraform(struct?: EventarcTriggerDestinationGkeOutputReference | EventarcTriggerDestinationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    location: cdktf.stringToTerraform(struct!.location),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class EventarcTriggerDestinationGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerDestinationGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerDestinationGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._location = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._location = value.location;
      this._namespace = value.namespace;
      this._path = value.path;
      this._service = value.service;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface EventarcTriggerDestination {
  /**
  * [WARNING] Configuring a Cloud Function in Trigger is not supported as of today. The Cloud Function resource name. Format: projects/{project}/locations/{location}/functions/{function}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#cloud_function EventarcTrigger#cloud_function}
  */
  readonly cloudFunction?: string;
  /**
  * The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#workflow EventarcTrigger#workflow}
  */
  readonly workflow?: string;
  /**
  * cloud_run_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}
  */
  readonly cloudRunService?: EventarcTriggerDestinationCloudRunService;
  /**
  * gke block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#gke EventarcTrigger#gke}
  */
  readonly gke?: EventarcTriggerDestinationGke;
}

export function eventarcTriggerDestinationToTerraform(struct?: EventarcTriggerDestinationOutputReference | EventarcTriggerDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_function: cdktf.stringToTerraform(struct!.cloudFunction),
    workflow: cdktf.stringToTerraform(struct!.workflow),
    cloud_run_service: eventarcTriggerDestinationCloudRunServiceToTerraform(struct!.cloudRunService),
    gke: eventarcTriggerDestinationGkeToTerraform(struct!.gke),
  }
}

export class EventarcTriggerDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunction = this._cloudFunction;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._cloudRunService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRunService = this._cloudRunService?.internalValue;
    }
    if (this._gke?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gke = this._gke?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudFunction = undefined;
      this._workflow = undefined;
      this._cloudRunService.internalValue = undefined;
      this._gke.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudFunction = value.cloudFunction;
      this._workflow = value.workflow;
      this._cloudRunService.internalValue = value.cloudRunService;
      this._gke.internalValue = value.gke;
    }
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction?: string; 
  public get cloudFunction() {
    return this.getStringAttribute('cloud_function');
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // cloud_run_service - computed: false, optional: true, required: false
  private _cloudRunService = new EventarcTriggerDestinationCloudRunServiceOutputReference(this, "cloud_run_service");
  public get cloudRunService() {
    return this._cloudRunService;
  }
  public putCloudRunService(value: EventarcTriggerDestinationCloudRunService) {
    this._cloudRunService.internalValue = value;
  }
  public resetCloudRunService() {
    this._cloudRunService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunServiceInput() {
    return this._cloudRunService.internalValue;
  }

  // gke - computed: false, optional: true, required: false
  private _gke = new EventarcTriggerDestinationGkeOutputReference(this, "gke");
  public get gke() {
    return this._gke;
  }
  public putGke(value: EventarcTriggerDestinationGke) {
    this._gke.internalValue = value;
  }
  public resetGke() {
    this._gke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeInput() {
    return this._gke.internalValue;
  }
}
export interface EventarcTriggerMatchingCriteria {
  /**
  * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#attribute EventarcTrigger#attribute}
  */
  readonly attribute: string;
  /**
  * Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#operator EventarcTrigger#operator}
  */
  readonly operator?: string;
  /**
  * Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#value EventarcTrigger#value}
  */
  readonly value: string;
}

export function eventarcTriggerMatchingCriteriaToTerraform(struct?: EventarcTriggerMatchingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class EventarcTriggerMatchingCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventarcTriggerMatchingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerMatchingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventarcTriggerMatchingCriteriaList extends cdktf.ComplexList {
  public internalValue? : EventarcTriggerMatchingCriteria[] | cdktf.IResolvable

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
  public get(index: number): EventarcTriggerMatchingCriteriaOutputReference {
    return new EventarcTriggerMatchingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventarcTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#create EventarcTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#delete EventarcTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#update EventarcTrigger#update}
  */
  readonly update?: string;
}

export function eventarcTriggerTimeoutsToTerraform(struct?: EventarcTriggerTimeoutsOutputReference | EventarcTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EventarcTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface EventarcTriggerTransportPubsub {
  /**
  * Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#topic EventarcTrigger#topic}
  */
  readonly topic?: string;
}

export function eventarcTriggerTransportPubsubToTerraform(struct?: EventarcTriggerTransportPubsubOutputReference | EventarcTriggerTransportPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class EventarcTriggerTransportPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerTransportPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerTransportPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface EventarcTriggerTransport {
  /**
  * pubsub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#pubsub EventarcTrigger#pubsub}
  */
  readonly pubsub?: EventarcTriggerTransportPubsub;
}

export function eventarcTriggerTransportToTerraform(struct?: EventarcTriggerTransportOutputReference | EventarcTriggerTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: eventarcTriggerTransportPubsubToTerraform(struct!.pubsub),
  }
}

export class EventarcTriggerTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcTriggerTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: true, required: false
  private _pubsub = new EventarcTriggerTransportPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: EventarcTriggerTransportPubsub) {
    this._pubsub.internalValue = value;
  }
  public resetPubsub() {
    this._pubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger google_eventarc_trigger}
*/
export class EventarcTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_eventarc_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger google_eventarc_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventarcTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: EventarcTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_eventarc_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._destination.internalValue = config.destination;
    this._matchingCriteria.internalValue = config.matchingCriteria;
    this._timeouts.internalValue = config.timeouts;
    this._transport.internalValue = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new EventarcTriggerDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EventarcTriggerDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // matching_criteria - computed: false, optional: false, required: true
  private _matchingCriteria = new EventarcTriggerMatchingCriteriaList(this, "matching_criteria", true);
  public get matchingCriteria() {
    return this._matchingCriteria;
  }
  public putMatchingCriteria(value: EventarcTriggerMatchingCriteria[] | cdktf.IResolvable) {
    this._matchingCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingCriteriaInput() {
    return this._matchingCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventarcTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventarcTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new EventarcTriggerTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: EventarcTriggerTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      destination: eventarcTriggerDestinationToTerraform(this._destination.internalValue),
      matching_criteria: cdktf.listMapper(eventarcTriggerMatchingCriteriaToTerraform, true)(this._matchingCriteria.internalValue),
      timeouts: eventarcTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      transport: eventarcTriggerTransportToTerraform(this._transport.internalValue),
    };
  }
}
