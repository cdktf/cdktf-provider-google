// https://www.terraform.io/docs/providers/google/r/cloud_run_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface CloudRunServiceConfig extends TerraformMetaArguments {
  readonly autogenerateRevisionName?: boolean;
  /** The location of the cloud run instance. eg us-central1 */
  readonly location: string;
  /** Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  readonly project?: string;
  /** metadata block */
  readonly metadata?: CloudRunServiceMetadata[];
  /** template block */
  readonly template?: CloudRunServiceTemplate[];
  /** timeouts block */
  readonly timeouts?: CloudRunServiceTimeouts;
  /** traffic block */
  readonly traffic?: CloudRunServiceTraffic[];
}
export class CloudRunServiceStatusConditions extends ComplexComputedList {

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: true
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunServiceStatus extends ComplexComputedList {

  // conditions - computed: true, optional: false, required: true
  public get conditions() {
    return 'not implemented' as any;
  }

  // latest_created_revision_name - computed: true, optional: false, required: true
  public get latestCreatedRevisionName() {
    return this.getStringAttribute('latest_created_revision_name');
  }

  // latest_ready_revision_name - computed: true, optional: false, required: true
  public get latestReadyRevisionName() {
    return this.getStringAttribute('latest_ready_revision_name');
  }

  // observed_generation - computed: true, optional: false, required: true
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface CloudRunServiceMetadata {
  /** Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** In Cloud Run the namespace must be equal to either the
project ID or project number. */
  readonly namespace?: string;
}
export interface CloudRunServiceTemplateMetadata {
  /** Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** In Cloud Run the namespace must be equal to either the
project ID or project number. It will default to the resource's project. */
  readonly namespace?: string;
}
export interface CloudRunServiceTemplateSpecContainersEnv {
  /** Name of the environment variable. */
  readonly name?: string;
  /** Variable references $(VAR_NAME) are expanded
using the previous defined environment variables in the container and
any route environment variables. If a variable cannot be resolved,
the reference in the input string will be unchanged. The $(VAR_NAME)
syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped
references will never be expanded, regardless of whether the variable
exists or not.
Defaults to "". */
  readonly value?: string;
}
export interface CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
  /** Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
}
export interface CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
  /** local_object_reference block */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference[];
}
export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
  /** Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
}
export interface CloudRunServiceTemplateSpecContainersEnvFromSecretRef {
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
  /** local_object_reference block */
  readonly localObjectReference?: CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference[];
}
export interface CloudRunServiceTemplateSpecContainersEnvFrom {
  /** An optional identifier to prepend to each key in the ConfigMap. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: CloudRunServiceTemplateSpecContainersEnvFromSecretRef[];
}
export interface CloudRunServiceTemplateSpecContainersPorts {
  /** Port number. */
  readonly containerPort: number;
  /** Name of the port. */
  readonly name?: string;
  /** Protocol used on port. Defaults to TCP. */
  readonly protocol?: string;
}
export interface CloudRunServiceTemplateSpecContainersResources {
  /** Limits describes the maximum amount of compute resources allowed.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
  readonly limits?: { [key: string]: string };
  /** Requests describes the minimum amount of compute resources required.
If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go */
  readonly requests?: { [key: string]: string };
}
export interface CloudRunServiceTemplateSpecContainers {
  /** Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  readonly command?: string[];
  /** Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
More info: https://kubernetes.io/docs/concepts/containers/images */
  readonly image: string;
  /** Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: CloudRunServiceTemplateSpecContainersEnv[];
  /** env_from block */
  readonly envFrom?: CloudRunServiceTemplateSpecContainersEnvFrom[];
  /** ports block */
  readonly ports?: CloudRunServiceTemplateSpecContainersPorts[];
  /** resources block */
  readonly resources?: CloudRunServiceTemplateSpecContainersResources[];
}
export interface CloudRunServiceTemplateSpec {
  /** ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
- '0' thread-safe, the system should manage the max concurrency. This is
    the default value.
- '1' not-thread-safe. Single concurrency
- '2-N' thread-safe, max concurrency of N */
  readonly containerConcurrency?: number;
  /** Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account. */
  readonly serviceAccountName?: string;
  /** TimeoutSeconds holds the max duration the instance is allowed for responding to a request. */
  readonly timeoutSeconds?: number;
  /** containers block */
  readonly containers?: CloudRunServiceTemplateSpecContainers[];
}
export interface CloudRunServiceTemplate {
  /** metadata block */
  readonly metadata?: CloudRunServiceTemplateMetadata[];
  /** spec block */
  readonly spec?: CloudRunServiceTemplateSpec[];
}
export interface CloudRunServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface CloudRunServiceTraffic {
  /** LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty. */
  readonly latestRevision?: boolean;
  /** Percent specifies percent of the traffic to this Revision or Configuration. */
  readonly percent: number;
  /** RevisionName of a specific revision to which to send this portion of traffic. */
  readonly revisionName?: string;
}

// Resource

export class CloudRunService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _autogenerateRevisionName?: boolean;
  public get autogenerateRevisionName() {
    return this._autogenerateRevisionName;
  }
  public set autogenerateRevisionName(value: boolean | undefined) {
    this._autogenerateRevisionName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // status - computed: true, optional: false, required: true
  public status(index: string) {
    return new CloudRunServiceStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: CloudRunServiceMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: CloudRunServiceMetadata[] | undefined) {
    this._metadata = value;
  }

  // template - computed: false, optional: true, required: false
  private _template?: CloudRunServiceTemplate[];
  public get template() {
    return this._template;
  }
  public set template(value: CloudRunServiceTemplate[] | undefined) {
    this._template = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudRunServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudRunServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: CloudRunServiceTraffic[];
  public get traffic() {
    return this._traffic;
  }
  public set traffic(value: CloudRunServiceTraffic[] | undefined) {
    this._traffic = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autogenerate_revision_name: this._autogenerateRevisionName,
      location: this._location,
      name: this._name,
      project: this._project,
      metadata: this._metadata,
      template: this._template,
      timeouts: this._timeouts,
      traffic: this._traffic,
    };
  }
}
