# `clouddeployTarget` Submodule <a name="`clouddeployTarget` Submodule" id="@cdktf/provider-google.clouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployTarget <a name="ClouddeployTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTarget;

ClouddeployTarget.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .anthosCluster(ClouddeployTargetAnthosCluster)
//  .customTarget(ClouddeployTargetCustomTarget)
//  .deployParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .executionConfigs(IResolvable)
//  .executionConfigs(java.util.List<ClouddeployTargetExecutionConfigs>)
//  .gke(ClouddeployTargetGke)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multiTarget(ClouddeployTargetMultiTarget)
//  .project(java.lang.String)
//  .requireApproval(java.lang.Boolean)
//  .requireApproval(IResolvable)
//  .run(ClouddeployTargetRun)
//  .timeouts(ClouddeployTargetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.customTarget">customTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.deployParameters">deployParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs">executionConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>></code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.multiTarget">multiTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval">requireApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthosCluster`<sup>Optional</sup> <a name="anthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `customTarget`<sup>Optional</sup> <a name="customTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.customTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}

---

##### `deployParameters`<sup>Optional</sup> <a name="deployParameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.deployParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `executionConfigs`<sup>Optional</sup> <a name="executionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>>

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `multiTarget`<sup>Optional</sup> <a name="multiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.multiTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster">putAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget">putCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs">putExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget">putMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster">resetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget">resetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters">resetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs">resetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget">resetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval">resetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnthosCluster` <a name="putAnthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster"></a>

```java
public void putAnthosCluster(ClouddeployTargetAnthosCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `putCustomTarget` <a name="putCustomTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget"></a>

```java
public void putCustomTarget(ClouddeployTargetCustomTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---

##### `putExecutionConfigs` <a name="putExecutionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs"></a>

```java
public void putExecutionConfigs(IResolvable OR java.util.List<ClouddeployTargetExecutionConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>>

---

##### `putGke` <a name="putGke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke"></a>

```java
public void putGke(ClouddeployTargetGke value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `putMultiTarget` <a name="putMultiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget"></a>

```java
public void putMultiTarget(ClouddeployTargetMultiTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---

##### `putRun` <a name="putRun" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun"></a>

```java
public void putRun(ClouddeployTargetRun value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts"></a>

```java
public void putTimeouts(ClouddeployTargetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAnthosCluster` <a name="resetAnthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster"></a>

```java
public void resetAnthosCluster()
```

##### `resetCustomTarget` <a name="resetCustomTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget"></a>

```java
public void resetCustomTarget()
```

##### `resetDeployParameters` <a name="resetDeployParameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters"></a>

```java
public void resetDeployParameters()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionConfigs` <a name="resetExecutionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs"></a>

```java
public void resetExecutionConfigs()
```

##### `resetGke` <a name="resetGke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke"></a>

```java
public void resetGke()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMultiTarget` <a name="resetMultiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget"></a>

```java
public void resetMultiTarget()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequireApproval` <a name="resetRequireApproval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval"></a>

```java
public void resetRequireApproval()
```

##### `resetRun` <a name="resetRun" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun"></a>

```java
public void resetRun()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTarget;

ClouddeployTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTarget;

ClouddeployTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTarget;

ClouddeployTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTarget;

ClouddeployTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClouddeployTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ClouddeployTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClouddeployTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget">customTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs">executionConfigs</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput">anthosClusterInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput">customTargetInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput">deployParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput">executionConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput">multiTargetInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput">requireApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput">runInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters">deployParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval">requireApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anthosCluster`<sup>Required</sup> <a name="anthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster"></a>

```java
public ClouddeployTargetAnthosClusterOutputReference getAnthosCluster();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customTarget`<sup>Required</sup> <a name="customTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget"></a>

```java
public ClouddeployTargetCustomTargetOutputReference getCustomTarget();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `executionConfigs`<sup>Required</sup> <a name="executionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs"></a>

```java
public ClouddeployTargetExecutionConfigsList getExecutionConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke"></a>

```java
public ClouddeployTargetGkeOutputReference getGke();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a>

---

##### `multiTarget`<sup>Required</sup> <a name="multiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget"></a>

```java
public ClouddeployTargetMultiTargetOutputReference getMultiTarget();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run"></a>

```java
public ClouddeployTargetRunOutputReference getRun();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts"></a>

```java
public ClouddeployTargetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `anthosClusterInput`<sup>Optional</sup> <a name="anthosClusterInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput"></a>

```java
public ClouddeployTargetAnthosCluster getAnthosClusterInput();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `customTargetInput`<sup>Optional</sup> <a name="customTargetInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput"></a>

```java
public ClouddeployTargetCustomTarget getCustomTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---

##### `deployParametersInput`<sup>Optional</sup> <a name="deployParametersInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeployParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionConfigsInput`<sup>Optional</sup> <a name="executionConfigsInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput"></a>

```java
public java.lang.Object getExecutionConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>>

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput"></a>

```java
public ClouddeployTargetGke getGkeInput();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multiTargetInput`<sup>Optional</sup> <a name="multiTargetInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput"></a>

```java
public ClouddeployTargetMultiTarget getMultiTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requireApprovalInput`<sup>Optional</sup> <a name="requireApprovalInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput"></a>

```java
public java.lang.Object getRequireApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput"></a>

```java
public ClouddeployTargetRun getRunInput();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployParameters`<sup>Required</sup> <a name="deployParameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeployParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval"></a>

```java
public java.lang.Object getRequireApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployTargetAnthosCluster <a name="ClouddeployTargetAnthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetAnthosCluster;

ClouddeployTargetAnthosCluster.builder()
//  .membership(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>java.lang.String</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetConfig <a name="ClouddeployTargetConfig" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetConfig;

ClouddeployTargetConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .anthosCluster(ClouddeployTargetAnthosCluster)
//  .customTarget(ClouddeployTargetCustomTarget)
//  .deployParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .executionConfigs(IResolvable)
//  .executionConfigs(java.util.List<ClouddeployTargetExecutionConfigs>)
//  .gke(ClouddeployTargetGke)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multiTarget(ClouddeployTargetMultiTarget)
//  .project(java.lang.String)
//  .requireApproval(java.lang.Boolean)
//  .requireApproval(IResolvable)
//  .run(ClouddeployTargetRun)
//  .timeouts(ClouddeployTargetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget">customTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters">deployParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs">executionConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>></code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval">requireApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthosCluster`<sup>Optional</sup> <a name="anthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster"></a>

```java
public ClouddeployTargetAnthosCluster getAnthosCluster();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `customTarget`<sup>Optional</sup> <a name="customTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget"></a>

```java
public ClouddeployTargetCustomTarget getCustomTarget();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}

---

##### `deployParameters`<sup>Optional</sup> <a name="deployParameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeployParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `executionConfigs`<sup>Optional</sup> <a name="executionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs"></a>

```java
public java.lang.Object getExecutionConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>>

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke"></a>

```java
public ClouddeployTargetGke getGke();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `multiTarget`<sup>Optional</sup> <a name="multiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget"></a>

```java
public ClouddeployTargetMultiTarget getMultiTarget();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval"></a>

```java
public java.lang.Object getRequireApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run"></a>

```java
public ClouddeployTargetRun getRun();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts"></a>

```java
public ClouddeployTargetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

### ClouddeployTargetCustomTarget <a name="ClouddeployTargetCustomTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetCustomTarget;

ClouddeployTargetCustomTarget.builder()
    .customTargetType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType">customTargetType</a></code> | <code>java.lang.String</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType"></a>

```java
public java.lang.String getCustomTargetType();
```

- *Type:* java.lang.String

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#custom_target_type ClouddeployTarget#custom_target_type}

---

### ClouddeployTargetExecutionConfigs <a name="ClouddeployTargetExecutionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetExecutionConfigs;

ClouddeployTargetExecutionConfigs.builder()
    .usages(java.util.List<java.lang.String>)
//  .artifactStorage(java.lang.String)
//  .executionTimeout(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .verbose(java.lang.Boolean)
//  .verbose(IResolvable)
//  .workerPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage">artifactStorage</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose">verbose</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#usages ClouddeployTarget#usages}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```java
public java.lang.String getArtifactStorage();
```

- *Type:* java.lang.String

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#execution_timeout ClouddeployTarget#execution_timeout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose"></a>

```java
public java.lang.Object getVerbose();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#verbose ClouddeployTarget#verbose}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}

---

### ClouddeployTargetGke <a name="ClouddeployTargetGke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetGke;

ClouddeployTargetGke.builder()
//  .cluster(java.lang.String)
//  .internalIp(java.lang.Boolean)
//  .internalIp(IResolvable)
//  .proxyUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp">internalIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp"></a>

```java
public java.lang.Object getInternalIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

### ClouddeployTargetMultiTarget <a name="ClouddeployTargetMultiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetMultiTarget;

ClouddeployTargetMultiTarget.builder()
    .targetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | Required. The target_ids of this multiTarget. |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#target_ids ClouddeployTarget#target_ids}

---

### ClouddeployTargetRun <a name="ClouddeployTargetRun" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetRun;

ClouddeployTargetRun.builder()
    .location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location">location</a></code> | <code>java.lang.String</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

### ClouddeployTargetTimeouts <a name="ClouddeployTargetTimeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetTimeouts;

ClouddeployTargetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployTargetAnthosClusterOutputReference <a name="ClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetAnthosClusterOutputReference;

new ClouddeployTargetAnthosClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```java
public void resetMembership()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membershipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```java
public java.lang.String getMembershipInput();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```java
public ClouddeployTargetAnthosCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---


### ClouddeployTargetCustomTargetOutputReference <a name="ClouddeployTargetCustomTargetOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetCustomTargetOutputReference;

new ClouddeployTargetCustomTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">customTargetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType">customTargetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTargetTypeInput`<sup>Optional</sup> <a name="customTargetTypeInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```java
public java.lang.String getCustomTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```java
public java.lang.String getCustomTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```java
public ClouddeployTargetCustomTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---


### ClouddeployTargetExecutionConfigsList <a name="ClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetExecutionConfigsList;

new ClouddeployTargetExecutionConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get"></a>

```java
public ClouddeployTargetExecutionConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>>

---


### ClouddeployTargetExecutionConfigsOutputReference <a name="ClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetExecutionConfigsOutputReference;

new ClouddeployTargetExecutionConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose">resetVerbose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```java
public void resetArtifactStorage()
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```java
public void resetExecutionTimeout()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetVerbose` <a name="resetVerbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```java
public void resetVerbose()
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```java
public void resetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">verboseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose">verbose</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```java
public java.lang.String getArtifactStorageInput();
```

- *Type:* java.lang.String

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```java
public java.lang.String getExecutionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```java
public java.util.List<java.lang.String> getUsagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verboseInput`<sup>Optional</sup> <a name="verboseInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```java
public java.lang.Object getVerboseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```java
public java.lang.String getWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```java
public java.lang.String getArtifactStorage();
```

- *Type:* java.lang.String

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verbose`<sup>Required</sup> <a name="verbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```java
public java.lang.Object getVerbose();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>

---


### ClouddeployTargetGkeOutputReference <a name="ClouddeployTargetGkeOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetGkeOutputReference;

new ClouddeployTargetGkeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```java
public void resetInternalIp()
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```java
public void resetProxyUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp">internalIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```java
public java.lang.Object getInternalIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```java
public java.lang.String getProxyUrlInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp"></a>

```java
public java.lang.Object getInternalIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue"></a>

```java
public ClouddeployTargetGke getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---


### ClouddeployTargetMultiTargetOutputReference <a name="ClouddeployTargetMultiTargetOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetMultiTargetOutputReference;

new ClouddeployTargetMultiTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```java
public ClouddeployTargetMultiTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---


### ClouddeployTargetRunOutputReference <a name="ClouddeployTargetRunOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetRunOutputReference;

new ClouddeployTargetRunOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue"></a>

```java
public ClouddeployTargetRun getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---


### ClouddeployTargetTimeoutsOutputReference <a name="ClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.clouddeploy_target.ClouddeployTargetTimeoutsOutputReference;

new ClouddeployTargetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---



