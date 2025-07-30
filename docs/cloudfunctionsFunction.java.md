# `cloudfunctionsFunction` Submodule <a name="`cloudfunctionsFunction` Submodule" id="@cdktf/provider-google.cloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfunctionsFunction <a name="CloudfunctionsFunction" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunction;

CloudfunctionsFunction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .runtime(java.lang.String)
//  .availableMemoryMb(java.lang.Number)
//  .buildEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .buildServiceAccount(java.lang.String)
//  .buildWorkerPool(java.lang.String)
//  .description(java.lang.String)
//  .dockerRegistry(java.lang.String)
//  .dockerRepository(java.lang.String)
//  .entryPoint(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .eventTrigger(CloudfunctionsFunctionEventTrigger)
//  .httpsTriggerSecurityLevel(java.lang.String)
//  .httpsTriggerUrl(java.lang.String)
//  .id(java.lang.String)
//  .ingressSettings(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .secretEnvironmentVariables(IResolvable)
//  .secretEnvironmentVariables(java.util.List<CloudfunctionsFunctionSecretEnvironmentVariables>)
//  .secretVolumes(IResolvable)
//  .secretVolumes(java.util.List<CloudfunctionsFunctionSecretVolumes>)
//  .serviceAccountEmail(java.lang.String)
//  .sourceArchiveBucket(java.lang.String)
//  .sourceArchiveObject(java.lang.String)
//  .sourceRepository(CloudfunctionsFunctionSourceRepository)
//  .timeout(java.lang.Number)
//  .timeouts(CloudfunctionsFunctionTimeouts)
//  .triggerHttp(java.lang.Boolean)
//  .triggerHttp(IResolvable)
//  .vpcConnector(java.lang.String)
//  .vpcConnectorEgressSettings(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime in which the function is going to run. Eg. "nodejs20", "python37", "go111". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.availableMemoryMb">availableMemoryMb</a></code> | <code>java.lang.Number</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildServiceAccount">buildServiceAccount</a></code> | <code>java.lang.String</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildWorkerPool">buildWorkerPool</a></code> | <code>java.lang.String</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dockerRegistry">dockerRegistry</a></code> | <code>java.lang.String</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>java.lang.String</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>java.lang.String</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#id CloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>></code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.secretVolumes">secretVolumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>></code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>java.lang.String</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceArchiveObject">sourceArchiveObject</a></code> | <code>java.lang.String</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.triggerHttp">triggerHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#name CloudfunctionsFunction#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

The runtime in which the function is going to run. Eg. "nodejs20", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#runtime CloudfunctionsFunction#runtime}

---

##### `availableMemoryMb`<sup>Optional</sup> <a name="availableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.availableMemoryMb"></a>

- *Type:* java.lang.Number

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#available_memory_mb CloudfunctionsFunction#available_memory_mb}

---

##### `buildEnvironmentVariables`<sup>Optional</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildEnvironmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_environment_variables CloudfunctionsFunction#build_environment_variables}

---

##### `buildServiceAccount`<sup>Optional</sup> <a name="buildServiceAccount" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildServiceAccount"></a>

- *Type:* java.lang.String

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_service_account CloudfunctionsFunction#build_service_account}

---

##### `buildWorkerPool`<sup>Optional</sup> <a name="buildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.buildWorkerPool"></a>

- *Type:* java.lang.String

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_worker_pool CloudfunctionsFunction#build_worker_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#description CloudfunctionsFunction#description}

---

##### `dockerRegistry`<sup>Optional</sup> <a name="dockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dockerRegistry"></a>

- *Type:* java.lang.String

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#docker_registry CloudfunctionsFunction#docker_registry}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.dockerRepository"></a>

- *Type:* java.lang.String

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#docker_repository CloudfunctionsFunction#docker_repository}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.entryPoint"></a>

- *Type:* java.lang.String

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#entry_point CloudfunctionsFunction#entry_point}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#environment_variables CloudfunctionsFunction#environment_variables}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.eventTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#event_trigger CloudfunctionsFunction#event_trigger}

---

##### `httpsTriggerSecurityLevel`<sup>Optional</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.httpsTriggerSecurityLevel"></a>

- *Type:* java.lang.String

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#https_trigger_security_level CloudfunctionsFunction#https_trigger_security_level}

---

##### `httpsTriggerUrl`<sup>Optional</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.httpsTriggerUrl"></a>

- *Type:* java.lang.String

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#https_trigger_url CloudfunctionsFunction#https_trigger_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#id CloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.ingressSettings"></a>

- *Type:* java.lang.String

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#ingress_settings CloudfunctionsFunction#ingress_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#kms_key_name CloudfunctionsFunction#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#labels CloudfunctionsFunction#labels}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.maxInstances"></a>

- *Type:* java.lang.Number

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#max_instances CloudfunctionsFunction#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.minInstances"></a>

- *Type:* java.lang.Number

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#min_instances CloudfunctionsFunction#min_instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#project CloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#region CloudfunctionsFunction#region}

---

##### `secretEnvironmentVariables`<sup>Optional</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.secretEnvironmentVariables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>>

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret_environment_variables CloudfunctionsFunction#secret_environment_variables}

---

##### `secretVolumes`<sup>Optional</sup> <a name="secretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.secretVolumes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>>

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret_volumes CloudfunctionsFunction#secret_volumes}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#service_account_email CloudfunctionsFunction#service_account_email}

---

##### `sourceArchiveBucket`<sup>Optional</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceArchiveBucket"></a>

- *Type:* java.lang.String

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_archive_bucket CloudfunctionsFunction#source_archive_bucket}

---

##### `sourceArchiveObject`<sup>Optional</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceArchiveObject"></a>

- *Type:* java.lang.String

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_archive_object CloudfunctionsFunction#source_archive_object}

---

##### `sourceRepository`<sup>Optional</sup> <a name="sourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.sourceRepository"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_repository CloudfunctionsFunction#source_repository}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#timeout CloudfunctionsFunction#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#timeouts CloudfunctionsFunction#timeouts}

---

##### `triggerHttp`<sup>Optional</sup> <a name="triggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.triggerHttp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#trigger_http CloudfunctionsFunction#trigger_http}

---

##### `vpcConnector`<sup>Optional</sup> <a name="vpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.vpcConnector"></a>

- *Type:* java.lang.String

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#vpc_connector CloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `vpcConnectorEgressSettings`<sup>Optional</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.vpcConnectorEgressSettings"></a>

- *Type:* java.lang.String

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#vpc_connector_egress_settings CloudfunctionsFunction#vpc_connector_egress_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger">putEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables">putSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes">putSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository">putSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetAvailableMemoryMb">resetAvailableMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildEnvironmentVariables">resetBuildEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildServiceAccount">resetBuildServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildWorkerPool">resetBuildWorkerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRegistry">resetDockerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRepository">resetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEventTrigger">resetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerSecurityLevel">resetHttpsTriggerSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerUrl">resetHttpsTriggerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretEnvironmentVariables">resetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretVolumes">resetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveBucket">resetSourceArchiveBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveObject">resetSourceArchiveObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceRepository">resetSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTriggerHttp">resetTriggerHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnector">resetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnectorEgressSettings">resetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventTrigger` <a name="putEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger"></a>

```java
public void putEventTrigger(CloudfunctionsFunctionEventTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---

##### `putSecretEnvironmentVariables` <a name="putSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```java
public void putSecretEnvironmentVariables(IResolvable OR java.util.List<CloudfunctionsFunctionSecretEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>>

---

##### `putSecretVolumes` <a name="putSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes"></a>

```java
public void putSecretVolumes(IResolvable OR java.util.List<CloudfunctionsFunctionSecretVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>>

---

##### `putSourceRepository` <a name="putSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository"></a>

```java
public void putSourceRepository(CloudfunctionsFunctionSourceRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts"></a>

```java
public void putTimeouts(CloudfunctionsFunctionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

---

##### `resetAvailableMemoryMb` <a name="resetAvailableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetAvailableMemoryMb"></a>

```java
public void resetAvailableMemoryMb()
```

##### `resetBuildEnvironmentVariables` <a name="resetBuildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```java
public void resetBuildEnvironmentVariables()
```

##### `resetBuildServiceAccount` <a name="resetBuildServiceAccount" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildServiceAccount"></a>

```java
public void resetBuildServiceAccount()
```

##### `resetBuildWorkerPool` <a name="resetBuildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildWorkerPool"></a>

```java
public void resetBuildWorkerPool()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDockerRegistry` <a name="resetDockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRegistry"></a>

```java
public void resetDockerRegistry()
```

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRepository"></a>

```java
public void resetDockerRepository()
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetEventTrigger` <a name="resetEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEventTrigger"></a>

```java
public void resetEventTrigger()
```

##### `resetHttpsTriggerSecurityLevel` <a name="resetHttpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```java
public void resetHttpsTriggerSecurityLevel()
```

##### `resetHttpsTriggerUrl` <a name="resetHttpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```java
public void resetHttpsTriggerUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetId"></a>

```java
public void resetId()
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetIngressSettings"></a>

```java
public void resetIngressSettings()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretEnvironmentVariables` <a name="resetSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```java
public void resetSecretEnvironmentVariables()
```

##### `resetSecretVolumes` <a name="resetSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretVolumes"></a>

```java
public void resetSecretVolumes()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetSourceArchiveBucket` <a name="resetSourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveBucket"></a>

```java
public void resetSourceArchiveBucket()
```

##### `resetSourceArchiveObject` <a name="resetSourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveObject"></a>

```java
public void resetSourceArchiveObject()
```

##### `resetSourceRepository` <a name="resetSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceRepository"></a>

```java
public void resetSourceRepository()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerHttp` <a name="resetTriggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTriggerHttp"></a>

```java
public void resetTriggerHttp()
```

##### `resetVpcConnector` <a name="resetVpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnector"></a>

```java
public void resetVpcConnector()
```

##### `resetVpcConnectorEgressSettings` <a name="resetVpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```java
public void resetVpcConnectorEgressSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunction;

CloudfunctionsFunction.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunction;

CloudfunctionsFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunction;

CloudfunctionsFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunction;

CloudfunctionsFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfunctionsFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfunctionsFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference">CloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList">CloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList">CloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference">CloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference">CloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMbInput">availableMemoryMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariablesInput">buildEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildServiceAccountInput">buildServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPoolInput">buildWorkerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistryInput">dockerRegistryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPointInput">entryPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTriggerInput">eventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">httpsTriggerSecurityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrlInput">httpsTriggerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariablesInput">secretEnvironmentVariablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumesInput">secretVolumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucketInput">sourceArchiveBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObjectInput">sourceArchiveObjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepositoryInput">sourceRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttpInput">triggerHttpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">vpcConnectorEgressSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorInput">vpcConnectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMb">availableMemoryMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildServiceAccount">buildServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPool">buildWorkerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistry">dockerRegistry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObject">sourceArchiveObject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttp">triggerHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTrigger"></a>

```java
public CloudfunctionsFunctionEventTriggerOutputReference getEventTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference">CloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```java
public CloudfunctionsFunctionSecretEnvironmentVariablesList getSecretEnvironmentVariables();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList">CloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumes"></a>

```java
public CloudfunctionsFunctionSecretVolumesList getSecretVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList">CloudfunctionsFunctionSecretVolumesList</a>

---

##### `sourceRepository`<sup>Required</sup> <a name="sourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepository"></a>

```java
public CloudfunctionsFunctionSourceRepositoryOutputReference getSourceRepository();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference">CloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeouts"></a>

```java
public CloudfunctionsFunctionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference">CloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `availableMemoryMbInput`<sup>Optional</sup> <a name="availableMemoryMbInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMbInput"></a>

```java
public java.lang.Number getAvailableMemoryMbInput();
```

- *Type:* java.lang.Number

---

##### `buildEnvironmentVariablesInput`<sup>Optional</sup> <a name="buildEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildServiceAccountInput`<sup>Optional</sup> <a name="buildServiceAccountInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildServiceAccountInput"></a>

```java
public java.lang.String getBuildServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `buildWorkerPoolInput`<sup>Optional</sup> <a name="buildWorkerPoolInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```java
public java.lang.String getBuildWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dockerRegistryInput`<sup>Optional</sup> <a name="dockerRegistryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistryInput"></a>

```java
public java.lang.String getDockerRegistryInput();
```

- *Type:* java.lang.String

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepositoryInput"></a>

```java
public java.lang.String getDockerRepositoryInput();
```

- *Type:* java.lang.String

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPointInput"></a>

```java
public java.lang.String getEntryPointInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `eventTriggerInput`<sup>Optional</sup> <a name="eventTriggerInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTriggerInput"></a>

```java
public CloudfunctionsFunctionEventTrigger getEventTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---

##### `httpsTriggerSecurityLevelInput`<sup>Optional</sup> <a name="httpsTriggerSecurityLevelInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```java
public java.lang.String getHttpsTriggerSecurityLevelInput();
```

- *Type:* java.lang.String

---

##### `httpsTriggerUrlInput`<sup>Optional</sup> <a name="httpsTriggerUrlInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```java
public java.lang.String getHttpsTriggerUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettingsInput"></a>

```java
public java.lang.String getIngressSettingsInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `secretEnvironmentVariablesInput`<sup>Optional</sup> <a name="secretEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```java
public java.lang.Object getSecretEnvironmentVariablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>>

---

##### `secretVolumesInput`<sup>Optional</sup> <a name="secretVolumesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumesInput"></a>

```java
public java.lang.Object getSecretVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>>

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `sourceArchiveBucketInput`<sup>Optional</sup> <a name="sourceArchiveBucketInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```java
public java.lang.String getSourceArchiveBucketInput();
```

- *Type:* java.lang.String

---

##### `sourceArchiveObjectInput`<sup>Optional</sup> <a name="sourceArchiveObjectInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```java
public java.lang.String getSourceArchiveObjectInput();
```

- *Type:* java.lang.String

---

##### `sourceRepositoryInput`<sup>Optional</sup> <a name="sourceRepositoryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepositoryInput"></a>

```java
public CloudfunctionsFunctionSourceRepository getSourceRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

---

##### `triggerHttpInput`<sup>Optional</sup> <a name="triggerHttpInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttpInput"></a>

```java
public java.lang.Object getTriggerHttpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="vpcConnectorEgressSettingsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```java
public java.lang.String getVpcConnectorEgressSettingsInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectorInput`<sup>Optional</sup> <a name="vpcConnectorInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorInput"></a>

```java
public java.lang.String getVpcConnectorInput();
```

- *Type:* java.lang.String

---

##### `availableMemoryMb`<sup>Required</sup> <a name="availableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMb"></a>

```java
public java.lang.Number getAvailableMemoryMb();
```

- *Type:* java.lang.Number

---

##### `buildEnvironmentVariables`<sup>Required</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildServiceAccount`<sup>Required</sup> <a name="buildServiceAccount" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildServiceAccount"></a>

```java
public java.lang.String getBuildServiceAccount();
```

- *Type:* java.lang.String

---

##### `buildWorkerPool`<sup>Required</sup> <a name="buildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPool"></a>

```java
public java.lang.String getBuildWorkerPool();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dockerRegistry`<sup>Required</sup> <a name="dockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistry"></a>

```java
public java.lang.String getDockerRegistry();
```

- *Type:* java.lang.String

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepository"></a>

```java
public java.lang.String getDockerRepository();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpsTriggerSecurityLevel`<sup>Required</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```java
public java.lang.String getHttpsTriggerSecurityLevel();
```

- *Type:* java.lang.String

---

##### `httpsTriggerUrl`<sup>Required</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrl"></a>

```java
public java.lang.String getHttpsTriggerUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettings"></a>

```java
public java.lang.String getIngressSettings();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `sourceArchiveBucket`<sup>Required</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucket"></a>

```java
public java.lang.String getSourceArchiveBucket();
```

- *Type:* java.lang.String

---

##### `sourceArchiveObject`<sup>Required</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObject"></a>

```java
public java.lang.String getSourceArchiveObject();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `triggerHttp`<sup>Required</sup> <a name="triggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttp"></a>

```java
public java.lang.Object getTriggerHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnector"></a>

```java
public java.lang.String getVpcConnector();
```

- *Type:* java.lang.String

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```java
public java.lang.String getVpcConnectorEgressSettings();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfunctionsFunctionConfig <a name="CloudfunctionsFunctionConfig" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionConfig;

CloudfunctionsFunctionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .runtime(java.lang.String)
//  .availableMemoryMb(java.lang.Number)
//  .buildEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .buildServiceAccount(java.lang.String)
//  .buildWorkerPool(java.lang.String)
//  .description(java.lang.String)
//  .dockerRegistry(java.lang.String)
//  .dockerRepository(java.lang.String)
//  .entryPoint(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .eventTrigger(CloudfunctionsFunctionEventTrigger)
//  .httpsTriggerSecurityLevel(java.lang.String)
//  .httpsTriggerUrl(java.lang.String)
//  .id(java.lang.String)
//  .ingressSettings(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .secretEnvironmentVariables(IResolvable)
//  .secretEnvironmentVariables(java.util.List<CloudfunctionsFunctionSecretEnvironmentVariables>)
//  .secretVolumes(IResolvable)
//  .secretVolumes(java.util.List<CloudfunctionsFunctionSecretVolumes>)
//  .serviceAccountEmail(java.lang.String)
//  .sourceArchiveBucket(java.lang.String)
//  .sourceArchiveObject(java.lang.String)
//  .sourceRepository(CloudfunctionsFunctionSourceRepository)
//  .timeout(java.lang.Number)
//  .timeouts(CloudfunctionsFunctionTimeouts)
//  .triggerHttp(java.lang.Boolean)
//  .triggerHttp(IResolvable)
//  .vpcConnector(java.lang.String)
//  .vpcConnectorEgressSettings(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime in which the function is going to run. Eg. "nodejs20", "python37", "go111". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.availableMemoryMb">availableMemoryMb</a></code> | <code>java.lang.Number</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildServiceAccount">buildServiceAccount</a></code> | <code>java.lang.String</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildWorkerPool">buildWorkerPool</a></code> | <code>java.lang.String</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRegistry">dockerRegistry</a></code> | <code>java.lang.String</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>java.lang.String</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>java.lang.String</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#id CloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>></code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretVolumes">secretVolumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>></code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>java.lang.String</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveObject">sourceArchiveObject</a></code> | <code>java.lang.String</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.triggerHttp">triggerHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#name CloudfunctionsFunction#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime in which the function is going to run. Eg. "nodejs20", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#runtime CloudfunctionsFunction#runtime}

---

##### `availableMemoryMb`<sup>Optional</sup> <a name="availableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```java
public java.lang.Number getAvailableMemoryMb();
```

- *Type:* java.lang.Number

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#available_memory_mb CloudfunctionsFunction#available_memory_mb}

---

##### `buildEnvironmentVariables`<sup>Optional</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_environment_variables CloudfunctionsFunction#build_environment_variables}

---

##### `buildServiceAccount`<sup>Optional</sup> <a name="buildServiceAccount" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildServiceAccount"></a>

```java
public java.lang.String getBuildServiceAccount();
```

- *Type:* java.lang.String

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_service_account CloudfunctionsFunction#build_service_account}

---

##### `buildWorkerPool`<sup>Optional</sup> <a name="buildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```java
public java.lang.String getBuildWorkerPool();
```

- *Type:* java.lang.String

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#build_worker_pool CloudfunctionsFunction#build_worker_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#description CloudfunctionsFunction#description}

---

##### `dockerRegistry`<sup>Optional</sup> <a name="dockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```java
public java.lang.String getDockerRegistry();
```

- *Type:* java.lang.String

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#docker_registry CloudfunctionsFunction#docker_registry}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRepository"></a>

```java
public java.lang.String getDockerRepository();
```

- *Type:* java.lang.String

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#docker_repository CloudfunctionsFunction#docker_repository}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#entry_point CloudfunctionsFunction#entry_point}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#environment_variables CloudfunctionsFunction#environment_variables}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.eventTrigger"></a>

```java
public CloudfunctionsFunctionEventTrigger getEventTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#event_trigger CloudfunctionsFunction#event_trigger}

---

##### `httpsTriggerSecurityLevel`<sup>Optional</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```java
public java.lang.String getHttpsTriggerSecurityLevel();
```

- *Type:* java.lang.String

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#https_trigger_security_level CloudfunctionsFunction#https_trigger_security_level}

---

##### `httpsTriggerUrl`<sup>Optional</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```java
public java.lang.String getHttpsTriggerUrl();
```

- *Type:* java.lang.String

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#https_trigger_url CloudfunctionsFunction#https_trigger_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#id CloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.ingressSettings"></a>

```java
public java.lang.String getIngressSettings();
```

- *Type:* java.lang.String

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#ingress_settings CloudfunctionsFunction#ingress_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#kms_key_name CloudfunctionsFunction#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#labels CloudfunctionsFunction#labels}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#max_instances CloudfunctionsFunction#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#min_instances CloudfunctionsFunction#min_instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#project CloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#region CloudfunctionsFunction#region}

---

##### `secretEnvironmentVariables`<sup>Optional</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```java
public java.lang.Object getSecretEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>>

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret_environment_variables CloudfunctionsFunction#secret_environment_variables}

---

##### `secretVolumes`<sup>Optional</sup> <a name="secretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretVolumes"></a>

```java
public java.lang.Object getSecretVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>>

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret_volumes CloudfunctionsFunction#secret_volumes}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#service_account_email CloudfunctionsFunction#service_account_email}

---

##### `sourceArchiveBucket`<sup>Optional</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```java
public java.lang.String getSourceArchiveBucket();
```

- *Type:* java.lang.String

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_archive_bucket CloudfunctionsFunction#source_archive_bucket}

---

##### `sourceArchiveObject`<sup>Optional</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```java
public java.lang.String getSourceArchiveObject();
```

- *Type:* java.lang.String

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_archive_object CloudfunctionsFunction#source_archive_object}

---

##### `sourceRepository`<sup>Optional</sup> <a name="sourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceRepository"></a>

```java
public CloudfunctionsFunctionSourceRepository getSourceRepository();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#source_repository CloudfunctionsFunction#source_repository}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#timeout CloudfunctionsFunction#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeouts"></a>

```java
public CloudfunctionsFunctionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#timeouts CloudfunctionsFunction#timeouts}

---

##### `triggerHttp`<sup>Optional</sup> <a name="triggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.triggerHttp"></a>

```java
public java.lang.Object getTriggerHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#trigger_http CloudfunctionsFunction#trigger_http}

---

##### `vpcConnector`<sup>Optional</sup> <a name="vpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnector"></a>

```java
public java.lang.String getVpcConnector();
```

- *Type:* java.lang.String

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#vpc_connector CloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `vpcConnectorEgressSettings`<sup>Optional</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```java
public java.lang.String getVpcConnectorEgressSettings();
```

- *Type:* java.lang.String

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#vpc_connector_egress_settings CloudfunctionsFunction#vpc_connector_egress_settings}

---

### CloudfunctionsFunctionEventTrigger <a name="CloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionEventTrigger;

CloudfunctionsFunctionEventTrigger.builder()
    .eventType(java.lang.String)
    .resource(java.lang.String)
//  .failurePolicy(CloudfunctionsFunctionEventTriggerFailurePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.resource">resource</a></code> | <code>java.lang.String</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#event_type CloudfunctionsFunction#event_type}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#resource CloudfunctionsFunction#resource}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```java
public CloudfunctionsFunctionEventTriggerFailurePolicy getFailurePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#failure_policy CloudfunctionsFunction#failure_policy}

---

### CloudfunctionsFunctionEventTriggerFailurePolicy <a name="CloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionEventTriggerFailurePolicy;

CloudfunctionsFunctionEventTriggerFailurePolicy.builder()
    .retry(java.lang.Boolean)
    .retry(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#retry CloudfunctionsFunction#retry}

---

### CloudfunctionsFunctionSecretEnvironmentVariables <a name="CloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretEnvironmentVariables;

CloudfunctionsFunctionSecretEnvironmentVariables.builder()
    .key(java.lang.String)
    .secret(java.lang.String)
    .version(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.key">key</a></code> | <code>java.lang.String</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.secret">secret</a></code> | <code>java.lang.String</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.version">version</a></code> | <code>java.lang.String</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#key CloudfunctionsFunction#key}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret CloudfunctionsFunction#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#version CloudfunctionsFunction#version}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#project_id CloudfunctionsFunction#project_id}

---

### CloudfunctionsFunctionSecretVolumes <a name="CloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumes;

CloudfunctionsFunctionSecretVolumes.builder()
    .mountPath(java.lang.String)
    .secret(java.lang.String)
//  .projectId(java.lang.String)
//  .versions(IResolvable)
//  .versions(java.util.List<CloudfunctionsFunctionSecretVolumesVersions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.secret">secret</a></code> | <code>java.lang.String</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.versions">versions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>></code> | versions block. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#mount_path CloudfunctionsFunction#mount_path}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#secret CloudfunctionsFunction#secret}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#project_id CloudfunctionsFunction#project_id}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.versions"></a>

```java
public java.lang.Object getVersions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#versions CloudfunctionsFunction#versions}

---

### CloudfunctionsFunctionSecretVolumesVersions <a name="CloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumesVersions;

CloudfunctionsFunctionSecretVolumesVersions.builder()
    .path(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.path">path</a></code> | <code>java.lang.String</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.version">version</a></code> | <code>java.lang.String</code> | Version of the secret (version number or the string "latest"). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#path CloudfunctionsFunction#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#version CloudfunctionsFunction#version}

---

### CloudfunctionsFunctionSourceRepository <a name="CloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSourceRepository;

CloudfunctionsFunctionSourceRepository.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.property.url">url</a></code> | <code>java.lang.String</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#url CloudfunctionsFunction#url}

---

### CloudfunctionsFunctionTimeouts <a name="CloudfunctionsFunctionTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionTimeouts;

CloudfunctionsFunctionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#create CloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#delete CloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#read CloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#update CloudfunctionsFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#create CloudfunctionsFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#delete CloudfunctionsFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#read CloudfunctionsFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/cloudfunctions_function#update CloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference;

new CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">retry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```java
public java.lang.Object getRetryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```java
public java.lang.Object getRetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```java
public CloudfunctionsFunctionEventTriggerFailurePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### CloudfunctionsFunctionEventTriggerOutputReference <a name="CloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionEventTriggerOutputReference;

new CloudfunctionsFunctionEventTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">putFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailurePolicy` <a name="putFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```java
public void putFailurePolicy(CloudfunctionsFunctionEventTriggerFailurePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```java
public void resetFailurePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```java
public CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference getFailurePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```java
public CloudfunctionsFunctionEventTriggerFailurePolicy getFailurePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```java
public CloudfunctionsFunctionEventTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---


### CloudfunctionsFunctionSecretEnvironmentVariablesList <a name="CloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretEnvironmentVariablesList;

new CloudfunctionsFunctionSecretEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```java
public CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>>

---


### CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference;

new CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables">CloudfunctionsFunctionSecretEnvironmentVariables</a>

---


### CloudfunctionsFunctionSecretVolumesList <a name="CloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumesList;

new CloudfunctionsFunctionSecretVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get"></a>

```java
public CloudfunctionsFunctionSecretVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>>

---


### CloudfunctionsFunctionSecretVolumesOutputReference <a name="CloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumesOutputReference;

new CloudfunctionsFunctionSecretVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersions` <a name="putVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```java
public void putVersions(IResolvable OR java.util.List<CloudfunctionsFunctionSecretVolumesVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```java
public void resetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList">CloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">versionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```java
public CloudfunctionsFunctionSecretVolumesVersionsList getVersions();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList">CloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```java
public java.lang.Object getVersionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>>

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes">CloudfunctionsFunctionSecretVolumes</a>

---


### CloudfunctionsFunctionSecretVolumesVersionsList <a name="CloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumesVersionsList;

new CloudfunctionsFunctionSecretVolumesVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```java
public CloudfunctionsFunctionSecretVolumesVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>>

---


### CloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="CloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSecretVolumesVersionsOutputReference;

new CloudfunctionsFunctionSecretVolumesVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions">CloudfunctionsFunctionSecretVolumesVersions</a>

---


### CloudfunctionsFunctionSourceRepositoryOutputReference <a name="CloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionSourceRepositoryOutputReference;

new CloudfunctionsFunctionSourceRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">deployedUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployedUrl`<sup>Required</sup> <a name="deployedUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```java
public java.lang.String getDeployedUrl();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```java
public CloudfunctionsFunctionSourceRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---


### CloudfunctionsFunctionTimeoutsOutputReference <a name="CloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions_function.CloudfunctionsFunctionTimeoutsOutputReference;

new CloudfunctionsFunctionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

---



