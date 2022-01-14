// https://www.terraform.io/docs/providers/google/r/cloud_run_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#autogenerate_revision_name CloudRunService#autogenerate_revision_name}
  */
  readonly autogenerateRevisionName?: boolean | cdktf.IResolvable;
  /**
  * The location of the cloud run instance. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#location CloudRunService#location}
  */
  readonly location: string;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#project CloudRunService#project}
  */
  readonly project?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#metadata CloudRunService#metadata}
  */
  readonly metadata?: CloudRunServiceMetadata;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#template CloudRunService#template}
  */
  readonly template?: CloudRunServiceTemplate;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#timeouts CloudRunService#timeouts}
  */
  readonly timeouts?: CloudRunServiceTimeouts;
  /**
  * traffic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#traffic CloudRunService#traffic}
  */
  readonly traffic?: CloudRunServiceTraffic[];
}
export class CloudRunServiceStatusConditions extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunServiceStatus extends cdktf.ComplexComputedList {

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions') as any;
  }

  // latest_created_revision_name - computed: true, optional: false, required: false
  public get latestCreatedRevisionName() {
    return this.getStringAttribute('latest_created_revision_name');
  }

  // latest_ready_revision_name - computed: true, optional: false, required: false
  public get latestReadyRevisionName() {
    return this.getStringAttribute('latest_ready_revision_name');
  }

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface CloudRunServiceMetadata {
  /**
  * Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Cloud Run (fully managed) uses the following annotation keys to configure features on a Service:

- 'run.googleapis.com/ingress' sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)
  for the Service. For example, '"run.googleapis.com/ingress" = "all"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#annotations CloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#labels CloudRunService#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#namespace CloudRunService#namespace}
  */
  readonly namespace?: string;
}

export function cloudRunServiceMetadataToTerraform(struct?: CloudRunServiceMetadataOutputReference | CloudRunServiceMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class CloudRunServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface CloudRunServiceTemplateMetadata {
  /**
  * Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#annotations CloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#labels CloudRunService#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name?: string;
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number. It will default to the resource's project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#namespace CloudRunService#namespace}
  */
  readonly namespace?: string;
}

export function cloudRunServiceTemplateMetadataToTerraform(struct?: CloudRunServiceTemplateMetadataOutputReference | CloudRunServiceTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class CloudRunServiceTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface CloudRunServiceTemplateSpecContainersEnv {
  /**
  * Name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name?: string;
  /**
  * Variable references $(VAR_NAME) are expanded
using the previous defined environment variables in the container and
any route environment variables. If a variable cannot be resolved,
the reference in the input string will be unchanged. The $(VAR_NAME)
syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped
references will never be expanded, regardless of whether the variable
exists or not.
Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#value CloudRunService#value}
  */
  readonly value?: string;
}

export function cloudRunServiceTemplateSpecContainersEnvToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
  /**
  * Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name: string;
}

export function cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference | CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#optional CloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#local_object_reference CloudRunService#local_object_reference}
  */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference;
}

export function cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference | CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform(struct!.localObjectReference),
  }
}

export class CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._localObjectReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localObjectReference = this._localObjectReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optional = undefined;
      this._localObjectReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optional = value.optional;
      this._localObjectReference.internalValue = value.localObjectReference;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // local_object_reference - computed: false, optional: true, required: false
  private _localObjectReference = new CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(this as any, "local_object_reference", true);
  public get localObjectReference() {
    return this._localObjectReference;
  }
  public putLocalObjectReference(value: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference) {
    this._localObjectReference.internalValue = value;
  }
  public resetLocalObjectReference() {
    this._localObjectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localObjectReferenceInput() {
    return this._localObjectReference.internalValue;
  }
}
export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
  /**
  * Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name: string;
}

export function cloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference | CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRef {
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#optional CloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#local_object_reference CloudRunService#local_object_reference}
  */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference;
}

export function cloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference | CloudRunServiceTemplateSpecContainersEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: cloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform(struct!.localObjectReference),
  }
}

export class CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpecContainersEnvFromSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._localObjectReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localObjectReference = this._localObjectReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpecContainersEnvFromSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optional = undefined;
      this._localObjectReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optional = value.optional;
      this._localObjectReference.internalValue = value.localObjectReference;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // local_object_reference - computed: false, optional: true, required: false
  private _localObjectReference = new CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(this as any, "local_object_reference", true);
  public get localObjectReference() {
    return this._localObjectReference;
  }
  public putLocalObjectReference(value: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference) {
    this._localObjectReference.internalValue = value;
  }
  public resetLocalObjectReference() {
    this._localObjectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localObjectReferenceInput() {
    return this._localObjectReference.internalValue;
  }
}
export interface CloudRunServiceTemplateSpecContainersEnvFrom {
  /**
  * An optional identifier to prepend to each key in the ConfigMap.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#prefix CloudRunService#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#config_map_ref CloudRunService#config_map_ref}
  */
  readonly configMapRef?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#secret_ref CloudRunService#secret_ref}
  */
  readonly secretRef?: CloudRunServiceTemplateSpecContainersEnvFromSecretRef;
}

export function cloudRunServiceTemplateSpecContainersEnvFromToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: cloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface CloudRunServiceTemplateSpecContainersPorts {
  /**
  * Port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#container_port CloudRunService#container_port}
  */
  readonly containerPort: number;
  /**
  * Name of the port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#name CloudRunService#name}
  */
  readonly name?: string;
  /**
  * Protocol used on port. Defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#protocol CloudRunService#protocol}
  */
  readonly protocol?: string;
}

export function cloudRunServiceTemplateSpecContainersPortsToTerraform(struct?: CloudRunServiceTemplateSpecContainersPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface CloudRunServiceTemplateSpecContainersResources {
  /**
  * Limits describes the maximum amount of compute resources allowed.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#limits CloudRunService#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required.
If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#requests CloudRunService#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

export function cloudRunServiceTemplateSpecContainersResourcesToTerraform(struct?: CloudRunServiceTemplateSpecContainersResourcesOutputReference | CloudRunServiceTemplateSpecContainersResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export class CloudRunServiceTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpecContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpecContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string } | cdktf.IResolvable; 
  public get limits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('limits') as any;
  }
  public set limits(value: { [key: string]: string } | cdktf.IResolvable) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string } | cdktf.IResolvable; 
  public get requests() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('requests') as any;
  }
  public set requests(value: { [key: string]: string } | cdktf.IResolvable) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface CloudRunServiceTemplateSpecContainers {
  /**
  * Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#args CloudRunService#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#command CloudRunService#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
More info: https://kubernetes.io/docs/concepts/containers/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#image CloudRunService#image}
  */
  readonly image: string;
  /**
  * Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#working_dir CloudRunService#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#env CloudRunService#env}
  */
  readonly env?: CloudRunServiceTemplateSpecContainersEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#env_from CloudRunService#env_from}
  */
  readonly envFrom?: CloudRunServiceTemplateSpecContainersEnvFrom[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#ports CloudRunService#ports}
  */
  readonly ports?: CloudRunServiceTemplateSpecContainersPorts[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#resources CloudRunService#resources}
  */
  readonly resources?: CloudRunServiceTemplateSpecContainersResources;
}

export function cloudRunServiceTemplateSpecContainersToTerraform(struct?: CloudRunServiceTemplateSpecContainers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromToTerraform)(struct!.envFrom),
    ports: cdktf.listMapper(cloudRunServiceTemplateSpecContainersPortsToTerraform)(struct!.ports),
    resources: cloudRunServiceTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}

export interface CloudRunServiceTemplateSpec {
  /**
  * ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
- '0' thread-safe, the system should manage the max concurrency. This is
    the default value.
- '1' not-thread-safe. Single concurrency
- '2-N' thread-safe, max concurrency of N
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#container_concurrency CloudRunService#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#service_account_name CloudRunService#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#timeout_seconds CloudRunService#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * containers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#containers CloudRunService#containers}
  */
  readonly containers?: CloudRunServiceTemplateSpecContainers[];
}

export function cloudRunServiceTemplateSpecToTerraform(struct?: CloudRunServiceTemplateSpecOutputReference | CloudRunServiceTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_concurrency: cdktf.numberToTerraform(struct!.containerConcurrency),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    containers: cdktf.listMapper(cloudRunServiceTemplateSpecContainersToTerraform)(struct!.containers),
  }
}

export class CloudRunServiceTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConcurrency = this._containerConcurrency;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConcurrency = undefined;
      this._serviceAccountName = undefined;
      this._timeoutSeconds = undefined;
      this._containers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConcurrency = value.containerConcurrency;
      this._serviceAccountName = value.serviceAccountName;
      this._timeoutSeconds = value.timeoutSeconds;
      this._containers = value.containers;
    }
  }

  // container_concurrency - computed: true, optional: true, required: false
  private _containerConcurrency?: number; 
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }
  public set containerConcurrency(value: number) {
    this._containerConcurrency = value;
  }
  public resetContainerConcurrency() {
    this._containerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConcurrencyInput() {
    return this._containerConcurrency;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: CloudRunServiceTemplateSpecContainers[]; 
  public get containers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('containers') as any;
  }
  public set containers(value: CloudRunServiceTemplateSpecContainers[]) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }
}
export interface CloudRunServiceTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#metadata CloudRunService#metadata}
  */
  readonly metadata?: CloudRunServiceTemplateMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#spec CloudRunService#spec}
  */
  readonly spec?: CloudRunServiceTemplateSpec;
}

export function cloudRunServiceTemplateToTerraform(struct?: CloudRunServiceTemplateOutputReference | CloudRunServiceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cloudRunServiceTemplateMetadataToTerraform(struct!.metadata),
    spec: cloudRunServiceTemplateSpecToTerraform(struct!.spec),
  }
}

export class CloudRunServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunServiceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CloudRunServiceTemplateMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CloudRunServiceTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new CloudRunServiceTemplateSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CloudRunServiceTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface CloudRunServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#create CloudRunService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#delete CloudRunService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#update CloudRunService#update}
  */
  readonly update?: string;
}

export function cloudRunServiceTimeoutsToTerraform(struct?: CloudRunServiceTimeoutsOutputReference | CloudRunServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudRunServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudRunServiceTimeouts | undefined {
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

  public set internalValue(value: CloudRunServiceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CloudRunServiceTraffic {
  /**
  * LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#latest_revision CloudRunService#latest_revision}
  */
  readonly latestRevision?: boolean | cdktf.IResolvable;
  /**
  * Percent specifies percent of the traffic to this Revision or Configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#percent CloudRunService#percent}
  */
  readonly percent: number;
  /**
  * RevisionName of a specific revision to which to send this portion of traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service#revision_name CloudRunService#revision_name}
  */
  readonly revisionName?: string;
}

export function cloudRunServiceTrafficToTerraform(struct?: CloudRunServiceTraffic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latest_revision: cdktf.booleanToTerraform(struct!.latestRevision),
    percent: cdktf.numberToTerraform(struct!.percent),
    revision_name: cdktf.stringToTerraform(struct!.revisionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service google_cloud_run_service}
*/
export class CloudRunService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_run_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service google_cloud_run_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRunServiceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRunServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autogenerateRevisionName = config.autogenerateRevisionName;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._metadata.internalValue = config.metadata;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._traffic = config.traffic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autogenerate_revision_name - computed: false, optional: true, required: false
  private _autogenerateRevisionName?: boolean | cdktf.IResolvable; 
  public get autogenerateRevisionName() {
    return this.getBooleanAttribute('autogenerate_revision_name') as any;
  }
  public set autogenerateRevisionName(value: boolean | cdktf.IResolvable) {
    this._autogenerateRevisionName = value;
  }
  public resetAutogenerateRevisionName() {
    this._autogenerateRevisionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateRevisionNameInput() {
    return this._autogenerateRevisionName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new CloudRunServiceStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CloudRunServiceMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CloudRunServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new CloudRunServiceTemplateOutputReference(this as any, "template", true);
  public get template() {
    return this._template;
  }
  public putTemplate(value: CloudRunServiceTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRunServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRunServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: CloudRunServiceTraffic[]; 
  public get traffic() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('traffic') as any;
  }
  public set traffic(value: CloudRunServiceTraffic[]) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autogenerate_revision_name: cdktf.booleanToTerraform(this._autogenerateRevisionName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      metadata: cloudRunServiceMetadataToTerraform(this._metadata.internalValue),
      template: cloudRunServiceTemplateToTerraform(this._template.internalValue),
      timeouts: cloudRunServiceTimeoutsToTerraform(this._timeouts.internalValue),
      traffic: cdktf.listMapper(cloudRunServiceTrafficToTerraform)(this._traffic),
    };
  }
}
