// https://www.terraform.io/docs/providers/google/r/cloud_run_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#autogenerate_revision_name CloudRunService#autogenerate_revision_name}
  */
  readonly autogenerateRevisionName?: boolean | cdktf.IResolvable;
  /**
  * The location of the cloud run instance. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#location CloudRunService#location}
  */
  readonly location: string;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#project CloudRunService#project}
  */
  readonly project?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#metadata CloudRunService#metadata}
  */
  readonly metadata?: CloudRunServiceMetadata[];
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#template CloudRunService#template}
  */
  readonly template?: CloudRunServiceTemplate[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#timeouts CloudRunService#timeouts}
  */
  readonly timeouts?: CloudRunServiceTimeouts;
  /**
  * traffic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#traffic CloudRunService#traffic}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#annotations CloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#labels CloudRunService#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#namespace CloudRunService#namespace}
  */
  readonly namespace?: string;
}

function cloudRunServiceMetadataToTerraform(struct?: CloudRunServiceMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#annotations CloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#labels CloudRunService#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
  */
  readonly name?: string;
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number. It will default to the resource's project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#namespace CloudRunService#namespace}
  */
  readonly namespace?: string;
}

function cloudRunServiceTemplateMetadataToTerraform(struct?: CloudRunServiceTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnv {
  /**
  * Name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#value CloudRunService#value}
  */
  readonly value?: string;
}

function cloudRunServiceTemplateSpecContainersEnvToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
  */
  readonly name: string;
}

function cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#optional CloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#local_object_reference CloudRunService#local_object_reference}
  */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference[];
}

function cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform)(struct!.localObjectReference),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
  /**
  * Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
  */
  readonly name: string;
}

function cloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRef {
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#optional CloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#local_object_reference CloudRunService#local_object_reference}
  */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference[];
}

function cloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform)(struct!.localObjectReference),
  }
}

export interface CloudRunServiceTemplateSpecContainersEnvFrom {
  /**
  * An optional identifier to prepend to each key in the ConfigMap.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#prefix CloudRunService#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#config_map_ref CloudRunService#config_map_ref}
  */
  readonly configMapRef?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef[];
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#secret_ref CloudRunService#secret_ref}
  */
  readonly secretRef?: CloudRunServiceTemplateSpecContainersEnvFromSecretRef[];
}

function cloudRunServiceTemplateSpecContainersEnvFromToTerraform(struct?: CloudRunServiceTemplateSpecContainersEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface CloudRunServiceTemplateSpecContainersPorts {
  /**
  * Port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#container_port CloudRunService#container_port}
  */
  readonly containerPort: number;
  /**
  * Name of the port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#name CloudRunService#name}
  */
  readonly name?: string;
  /**
  * Protocol used on port. Defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#protocol CloudRunService#protocol}
  */
  readonly protocol?: string;
}

function cloudRunServiceTemplateSpecContainersPortsToTerraform(struct?: CloudRunServiceTemplateSpecContainersPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#limits CloudRunService#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required.
If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#requests CloudRunService#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

function cloudRunServiceTemplateSpecContainersResourcesToTerraform(struct?: CloudRunServiceTemplateSpecContainersResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#args CloudRunService#args}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#command CloudRunService#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
More info: https://kubernetes.io/docs/concepts/containers/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#image CloudRunService#image}
  */
  readonly image: string;
  /**
  * Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#working_dir CloudRunService#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#env CloudRunService#env}
  */
  readonly env?: CloudRunServiceTemplateSpecContainersEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#env_from CloudRunService#env_from}
  */
  readonly envFrom?: CloudRunServiceTemplateSpecContainersEnvFrom[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#ports CloudRunService#ports}
  */
  readonly ports?: CloudRunServiceTemplateSpecContainersPorts[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#resources CloudRunService#resources}
  */
  readonly resources?: CloudRunServiceTemplateSpecContainersResources[];
}

function cloudRunServiceTemplateSpecContainersToTerraform(struct?: CloudRunServiceTemplateSpecContainers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(cloudRunServiceTemplateSpecContainersEnvFromToTerraform)(struct!.envFrom),
    ports: cdktf.listMapper(cloudRunServiceTemplateSpecContainersPortsToTerraform)(struct!.ports),
    resources: cdktf.listMapper(cloudRunServiceTemplateSpecContainersResourcesToTerraform)(struct!.resources),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#container_concurrency CloudRunService#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#service_account_name CloudRunService#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#timeout_seconds CloudRunService#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * containers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#containers CloudRunService#containers}
  */
  readonly containers?: CloudRunServiceTemplateSpecContainers[];
}

function cloudRunServiceTemplateSpecToTerraform(struct?: CloudRunServiceTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_concurrency: cdktf.numberToTerraform(struct!.containerConcurrency),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    containers: cdktf.listMapper(cloudRunServiceTemplateSpecContainersToTerraform)(struct!.containers),
  }
}

export interface CloudRunServiceTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#metadata CloudRunService#metadata}
  */
  readonly metadata?: CloudRunServiceTemplateMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#spec CloudRunService#spec}
  */
  readonly spec?: CloudRunServiceTemplateSpec[];
}

function cloudRunServiceTemplateToTerraform(struct?: CloudRunServiceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.listMapper(cloudRunServiceTemplateMetadataToTerraform)(struct!.metadata),
    spec: cdktf.listMapper(cloudRunServiceTemplateSpecToTerraform)(struct!.spec),
  }
}

export interface CloudRunServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#create CloudRunService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#delete CloudRunService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#update CloudRunService#update}
  */
  readonly update?: string;
}

function cloudRunServiceTimeoutsToTerraform(struct?: CloudRunServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CloudRunServiceTraffic {
  /**
  * LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#latest_revision CloudRunService#latest_revision}
  */
  readonly latestRevision?: boolean | cdktf.IResolvable;
  /**
  * Percent specifies percent of the traffic to this Revision or Configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#percent CloudRunService#percent}
  */
  readonly percent: number;
  /**
  * RevisionName of a specific revision to which to send this portion of traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html#revision_name CloudRunService#revision_name}
  */
  readonly revisionName?: string;
}

function cloudRunServiceTrafficToTerraform(struct?: CloudRunServiceTraffic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    latest_revision: cdktf.booleanToTerraform(struct!.latestRevision),
    percent: cdktf.numberToTerraform(struct!.percent),
    revision_name: cdktf.stringToTerraform(struct!.revisionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html google_cloud_run_service}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_run_service.html google_cloud_run_service} Resource
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
    this._metadata = config.metadata;
    this._template = config.template;
    this._timeouts = config.timeouts;
    this._traffic = config.traffic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autogenerate_revision_name - computed: false, optional: true, required: false
  private _autogenerateRevisionName?: boolean | cdktf.IResolvable;
  public get autogenerateRevisionName() {
    return this.getBooleanAttribute('autogenerate_revision_name');
  }
  public set autogenerateRevisionName(value: boolean | cdktf.IResolvable ) {
    this._autogenerateRevisionName = value;
  }
  public resetAutogenerateRevisionName() {
    this._autogenerateRevisionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateRevisionNameInput() {
    return this._autogenerateRevisionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new CloudRunServiceStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: CloudRunServiceMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: CloudRunServiceMetadata[] ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // template - computed: false, optional: true, required: false
  private _template?: CloudRunServiceTemplate[];
  public get template() {
    return this.interpolationForAttribute('template') as any;
  }
  public set template(value: CloudRunServiceTemplate[] ) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudRunServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudRunServiceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: CloudRunServiceTraffic[];
  public get traffic() {
    return this.interpolationForAttribute('traffic') as any;
  }
  public set traffic(value: CloudRunServiceTraffic[] ) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic
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
      metadata: cdktf.listMapper(cloudRunServiceMetadataToTerraform)(this._metadata),
      template: cdktf.listMapper(cloudRunServiceTemplateToTerraform)(this._template),
      timeouts: cloudRunServiceTimeoutsToTerraform(this._timeouts),
      traffic: cdktf.listMapper(cloudRunServiceTrafficToTerraform)(this._traffic),
    };
  }
}
