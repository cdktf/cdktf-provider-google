# `colabRuntimeTemplate` Submodule <a name="`colabRuntimeTemplate` Submodule" id="@cdktf/provider-google.colabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplate <a name="ColabRuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplate;

ColabRuntimeTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .dataPersistentDiskSpec(ColabRuntimeTemplateDataPersistentDiskSpec)
//  .description(java.lang.String)
//  .encryptionSpec(ColabRuntimeTemplateEncryptionSpec)
//  .eucConfig(ColabRuntimeTemplateEucConfig)
//  .id(java.lang.String)
//  .idleShutdownConfig(ColabRuntimeTemplateIdleShutdownConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineSpec(ColabRuntimeTemplateMachineSpec)
//  .name(java.lang.String)
//  .networkSpec(ColabRuntimeTemplateNetworkSpec)
//  .networkTags(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .shieldedVmConfig(ColabRuntimeTemplateShieldedVmConfig)
//  .softwareConfig(ColabRuntimeTemplateSoftwareConfig)
//  .timeouts(ColabRuntimeTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `dataPersistentDiskSpec`<sup>Optional</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `eucConfig`<sup>Optional</sup> <a name="eucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.eucConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleShutdownConfig`<sup>Optional</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkTags"></a>

- *Type:* java.util.List<java.lang.String>

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `shieldedVmConfig`<sup>Optional</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec">putDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig">putEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig">putIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec">putNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig">putShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec">resetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig">resetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig">resetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec">resetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig">resetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataPersistentDiskSpec` <a name="putDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```java
public void putDataPersistentDiskSpec(ColabRuntimeTemplateDataPersistentDiskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(ColabRuntimeTemplateEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `putEucConfig` <a name="putEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig"></a>

```java
public void putEucConfig(ColabRuntimeTemplateEucConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `putIdleShutdownConfig` <a name="putIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig"></a>

```java
public void putIdleShutdownConfig(ColabRuntimeTemplateIdleShutdownConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec"></a>

```java
public void putMachineSpec(ColabRuntimeTemplateMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `putNetworkSpec` <a name="putNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec"></a>

```java
public void putNetworkSpec(ColabRuntimeTemplateNetworkSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `putShieldedVmConfig` <a name="putShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig"></a>

```java
public void putShieldedVmConfig(ColabRuntimeTemplateShieldedVmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig"></a>

```java
public void putSoftwareConfig(ColabRuntimeTemplateSoftwareConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts"></a>

```java
public void putTimeouts(ColabRuntimeTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

---

##### `resetDataPersistentDiskSpec` <a name="resetDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```java
public void resetDataPersistentDiskSpec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetEucConfig` <a name="resetEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig"></a>

```java
public void resetEucConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetIdleShutdownConfig` <a name="resetIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```java
public void resetIdleShutdownConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec"></a>

```java
public void resetMachineSpec()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkSpec` <a name="resetNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec"></a>

```java
public void resetNetworkSpec()
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags"></a>

```java
public void resetNetworkTags()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetShieldedVmConfig` <a name="resetShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig"></a>

```java
public void resetShieldedVmConfig()
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig"></a>

```java
public void resetSoftwareConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplate;

ColabRuntimeTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplate;

ColabRuntimeTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplate;

ColabRuntimeTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplate;

ColabRuntimeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ColabRuntimeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ColabRuntimeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput">dataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput">eucConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput">idleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput">networkSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput">networkTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput">shieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataPersistentDiskSpec`<sup>Required</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```java
public ColabRuntimeTemplateDataPersistentDiskSpecOutputReference getDataPersistentDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec"></a>

```java
public ColabRuntimeTemplateEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `eucConfig`<sup>Required</sup> <a name="eucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig"></a>

```java
public ColabRuntimeTemplateEucConfigOutputReference getEucConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `idleShutdownConfig`<sup>Required</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig"></a>

```java
public ColabRuntimeTemplateIdleShutdownConfigOutputReference getIdleShutdownConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec"></a>

```java
public ColabRuntimeTemplateMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `networkSpec`<sup>Required</sup> <a name="networkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec"></a>

```java
public ColabRuntimeTemplateNetworkSpecOutputReference getNetworkSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `shieldedVmConfig`<sup>Required</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig"></a>

```java
public ColabRuntimeTemplateShieldedVmConfigOutputReference getShieldedVmConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig"></a>

```java
public ColabRuntimeTemplateSoftwareConfigOutputReference getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts"></a>

```java
public ColabRuntimeTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `dataPersistentDiskSpecInput`<sup>Optional</sup> <a name="dataPersistentDiskSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```java
public ColabRuntimeTemplateDataPersistentDiskSpec getDataPersistentDiskSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput"></a>

```java
public ColabRuntimeTemplateEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `eucConfigInput`<sup>Optional</sup> <a name="eucConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput"></a>

```java
public ColabRuntimeTemplateEucConfig getEucConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleShutdownConfigInput`<sup>Optional</sup> <a name="idleShutdownConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```java
public ColabRuntimeTemplateIdleShutdownConfig getIdleShutdownConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput"></a>

```java
public ColabRuntimeTemplateMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSpecInput`<sup>Optional</sup> <a name="networkSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput"></a>

```java
public ColabRuntimeTemplateNetworkSpec getNetworkSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `shieldedVmConfigInput`<sup>Optional</sup> <a name="shieldedVmConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```java
public ColabRuntimeTemplateShieldedVmConfig getShieldedVmConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput"></a>

```java
public ColabRuntimeTemplateSoftwareConfig getSoftwareConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateConfig <a name="ColabRuntimeTemplateConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateConfig;

ColabRuntimeTemplateConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .dataPersistentDiskSpec(ColabRuntimeTemplateDataPersistentDiskSpec)
//  .description(java.lang.String)
//  .encryptionSpec(ColabRuntimeTemplateEncryptionSpec)
//  .eucConfig(ColabRuntimeTemplateEucConfig)
//  .id(java.lang.String)
//  .idleShutdownConfig(ColabRuntimeTemplateIdleShutdownConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineSpec(ColabRuntimeTemplateMachineSpec)
//  .name(java.lang.String)
//  .networkSpec(ColabRuntimeTemplateNetworkSpec)
//  .networkTags(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .shieldedVmConfig(ColabRuntimeTemplateShieldedVmConfig)
//  .softwareConfig(ColabRuntimeTemplateSoftwareConfig)
//  .timeouts(ColabRuntimeTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `dataPersistentDiskSpec`<sup>Optional</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```java
public ColabRuntimeTemplateDataPersistentDiskSpec getDataPersistentDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```java
public ColabRuntimeTemplateEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `eucConfig`<sup>Optional</sup> <a name="eucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig"></a>

```java
public ColabRuntimeTemplateEucConfig getEucConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleShutdownConfig`<sup>Optional</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```java
public ColabRuntimeTemplateIdleShutdownConfig getIdleShutdownConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec"></a>

```java
public ColabRuntimeTemplateMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec"></a>

```java
public ColabRuntimeTemplateNetworkSpec getNetworkSpec();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `shieldedVmConfig`<sup>Optional</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```java
public ColabRuntimeTemplateShieldedVmConfig getShieldedVmConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig"></a>

```java
public ColabRuntimeTemplateSoftwareConfig getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts"></a>

```java
public ColabRuntimeTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

### ColabRuntimeTemplateDataPersistentDiskSpec <a name="ColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateDataPersistentDiskSpec;

ColabRuntimeTemplateDataPersistentDiskSpec.builder()
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The type of the persistent disk. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}

---

### ColabRuntimeTemplateEncryptionSpec <a name="ColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateEncryptionSpec;

ColabRuntimeTemplateEncryptionSpec.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}

---

### ColabRuntimeTemplateEucConfig <a name="ColabRuntimeTemplateEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateEucConfig;

ColabRuntimeTemplateEucConfig.builder()
//  .eucDisabled(java.lang.Boolean)
//  .eucDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled">eucDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable end user credential access for the runtime. |

---

##### `eucDisabled`<sup>Optional</sup> <a name="eucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```java
public java.lang.Object getEucDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}

---

### ColabRuntimeTemplateIdleShutdownConfig <a name="ColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateIdleShutdownConfig;

ColabRuntimeTemplateIdleShutdownConfig.builder()
//  .idleTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | The duration after which the runtime is automatically shut down. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}

---

### ColabRuntimeTemplateMachineSpec <a name="ColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateMachineSpec;

ColabRuntimeTemplateMachineSpec.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The Compute Engine machine type selected for the runtime. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}

---

### ColabRuntimeTemplateNetworkSpec <a name="ColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateNetworkSpec;

ColabRuntimeTemplateNetworkSpec.builder()
//  .enableInternetAccess(java.lang.Boolean)
//  .enableInternetAccess(IResolvable)
//  .network(java.lang.String)
//  .subnetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork that this runtime is in. |

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```java
public java.lang.Object getEnableInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}

---

### ColabRuntimeTemplateShieldedVmConfig <a name="ColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateShieldedVmConfig;

ColabRuntimeTemplateShieldedVmConfig.builder()
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables secure boot for the runtime. |

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}

---

### ColabRuntimeTemplateSoftwareConfig <a name="ColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfig;

ColabRuntimeTemplateSoftwareConfig.builder()
//  .env(IResolvable)
//  .env(java.util.List<ColabRuntimeTemplateSoftwareConfigEnv>)
//  .postStartupScriptConfig(ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env">env</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>></code> | env block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env"></a>

```java
public java.lang.Object getEnv();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}

---

##### `postStartupScriptConfig`<sup>Optional</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```java
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getPostStartupScriptConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}

---

### ColabRuntimeTemplateSoftwareConfigEnv <a name="ColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigEnv;

ColabRuntimeTemplateSoftwareConfigEnv.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#value ColabRuntimeTemplate#value}

---

### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;

ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.builder()
//  .postStartupScript(java.lang.String)
//  .postStartupScriptBehavior(java.lang.String)
//  .postStartupScriptUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>java.lang.String</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>java.lang.String</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}

---

##### `postStartupScriptBehavior`<sup>Optional</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```java
public java.lang.String getPostStartupScriptBehavior();
```

- *Type:* java.lang.String

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}

---

##### `postStartupScriptUrl`<sup>Optional</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```java
public java.lang.String getPostStartupScriptUrl();
```

- *Type:* java.lang.String

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}

---

### ColabRuntimeTemplateTimeouts <a name="ColabRuntimeTemplateTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateTimeouts;

ColabRuntimeTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="ColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference;

new ColabRuntimeTemplateDataPersistentDiskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateDataPersistentDiskSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### ColabRuntimeTemplateEncryptionSpecOutputReference <a name="ColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateEncryptionSpecOutputReference;

new ColabRuntimeTemplateEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---


### ColabRuntimeTemplateEucConfigOutputReference <a name="ColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateEucConfigOutputReference;

new ColabRuntimeTemplateEucConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">resetEucDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEucDisabled` <a name="resetEucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```java
public void resetEucDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">eucDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">eucDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eucDisabledInput`<sup>Optional</sup> <a name="eucDisabledInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```java
public java.lang.Object getEucDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eucDisabled`<sup>Required</sup> <a name="eucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```java
public java.lang.Object getEucDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateEucConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---


### ColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="ColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateIdleShutdownConfigOutputReference;

new ColabRuntimeTemplateIdleShutdownConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.String getIdleTimeoutInput();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateIdleShutdownConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---


### ColabRuntimeTemplateMachineSpecOutputReference <a name="ColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateMachineSpecOutputReference;

new ColabRuntimeTemplateMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---


### ColabRuntimeTemplateNetworkSpecOutputReference <a name="ColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateNetworkSpecOutputReference;

new ColabRuntimeTemplateNetworkSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```java
public void resetEnableInternetAccess()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```java
public java.lang.Object getEnableInternetAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```java
public java.lang.Object getEnableInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateNetworkSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---


### ColabRuntimeTemplateShieldedVmConfigOutputReference <a name="ColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateShieldedVmConfigOutputReference;

new ColabRuntimeTemplateShieldedVmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateShieldedVmConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigEnvList <a name="ColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigEnvList;

new ColabRuntimeTemplateSoftwareConfigEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```java
public ColabRuntimeTemplateSoftwareConfigEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>>

---


### ColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="ColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigEnvOutputReference;

new ColabRuntimeTemplateSoftwareConfigEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>

---


### ColabRuntimeTemplateSoftwareConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigOutputReference;

new ColabRuntimeTemplateSoftwareConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">putPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">resetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable OR java.util.List<ColabRuntimeTemplateSoftwareConfigEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>>

---

##### `putPostStartupScriptConfig` <a name="putPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```java
public void putPostStartupScriptConfig(ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetPostStartupScriptConfig` <a name="resetPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```java
public void resetPostStartupScriptConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">envInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">postStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```java
public ColabRuntimeTemplateSoftwareConfigEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `postStartupScriptConfig`<sup>Required</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```java
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference getPostStartupScriptConfig();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```java
public java.lang.Object getEnvInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>>

---

##### `postStartupScriptConfigInput`<sup>Optional</sup> <a name="postStartupScriptConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```java
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getPostStartupScriptConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateSoftwareConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference;

new ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">resetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">resetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```java
public void resetPostStartupScript()
```

##### `resetPostStartupScriptBehavior` <a name="resetPostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```java
public void resetPostStartupScriptBehavior()
```

##### `resetPostStartupScriptUrl` <a name="resetPostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```java
public void resetPostStartupScriptUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">postStartupScriptBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">postStartupScriptUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postStartupScriptBehaviorInput`<sup>Optional</sup> <a name="postStartupScriptBehaviorInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```java
public java.lang.String getPostStartupScriptBehaviorInput();
```

- *Type:* java.lang.String

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```java
public java.lang.String getPostStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `postStartupScriptUrlInput`<sup>Optional</sup> <a name="postStartupScriptUrlInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```java
public java.lang.String getPostStartupScriptUrlInput();
```

- *Type:* java.lang.String

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

---

##### `postStartupScriptBehavior`<sup>Required</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```java
public java.lang.String getPostStartupScriptBehavior();
```

- *Type:* java.lang.String

---

##### `postStartupScriptUrl`<sup>Required</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```java
public java.lang.String getPostStartupScriptUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```java
public ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### ColabRuntimeTemplateTimeoutsOutputReference <a name="ColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.colab_runtime_template.ColabRuntimeTemplateTimeoutsOutputReference;

new ColabRuntimeTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

---



