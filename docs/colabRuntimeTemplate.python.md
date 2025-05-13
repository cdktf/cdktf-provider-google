# `colabRuntimeTemplate` Submodule <a name="`colabRuntimeTemplate` Submodule" id="@cdktf/provider-google.colabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplate <a name="ColabRuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  data_persistent_disk_spec: ColabRuntimeTemplateDataPersistentDiskSpec = None,
  description: str = None,
  encryption_spec: ColabRuntimeTemplateEncryptionSpec = None,
  euc_config: ColabRuntimeTemplateEucConfig = None,
  id: str = None,
  idle_shutdown_config: ColabRuntimeTemplateIdleShutdownConfig = None,
  labels: typing.Mapping[str] = None,
  machine_spec: ColabRuntimeTemplateMachineSpec = None,
  name: str = None,
  network_spec: ColabRuntimeTemplateNetworkSpec = None,
  network_tags: typing.List[str] = None,
  project: str = None,
  shielded_vm_config: ColabRuntimeTemplateShieldedVmConfig = None,
  software_config: ColabRuntimeTemplateSoftwareConfig = None,
  timeouts: ColabRuntimeTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `data_persistent_disk_spec`<sup>Optional</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.description"></a>

- *Type:* str

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `euc_config`<sup>Optional</sup> <a name="euc_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.eucConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_shutdown_config`<sup>Optional</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.networkTags"></a>

- *Type:* typing.List[str]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `shielded_vm_config`<sup>Optional</sup> <a name="shielded_vm_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec">put_data_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig">put_euc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig">put_idle_shutdown_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec">put_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig">put_shielded_vm_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig">put_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec">reset_data_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig">reset_euc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig">reset_idle_shutdown_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec">reset_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec">reset_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig">reset_shielded_vm_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig">reset_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_persistent_disk_spec` <a name="put_data_persistent_disk_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```python
def put_data_persistent_disk_spec(
  disk_size_gb: str = None,
  disk_type: str = None
) -> None
```

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.diskSizeGb"></a>

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.diskType"></a>

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}

---

##### `put_euc_config` <a name="put_euc_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig"></a>

```python
def put_euc_config(
  euc_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `euc_disabled`<sup>Optional</sup> <a name="euc_disabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig.parameter.eucDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}

---

##### `put_idle_shutdown_config` <a name="put_idle_shutdown_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig"></a>

```python
def put_idle_shutdown_config(
  idle_timeout: str = None
) -> None
```

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig.parameter.idleTimeout"></a>

- *Type:* str

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}

---

##### `put_network_spec` <a name="put_network_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec"></a>

```python
def put_network_spec(
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  network: str = None,
  subnetwork: str = None
) -> None
```

###### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.enableInternetAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.network"></a>

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}

---

##### `put_shielded_vm_config` <a name="put_shielded_vm_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig"></a>

```python
def put_shielded_vm_config(
  enable_secure_boot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}

---

##### `put_software_config` <a name="put_software_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig"></a>

```python
def put_software_config(
  env: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]] = None,
  post_startup_script_config: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig = None
) -> None
```

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig.parameter.env"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}

---

###### `post_startup_script_config`<sup>Optional</sup> <a name="post_startup_script_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig.parameter.postStartupScriptConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}.

---

##### `reset_data_persistent_disk_spec` <a name="reset_data_persistent_disk_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```python
def reset_data_persistent_disk_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_euc_config` <a name="reset_euc_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig"></a>

```python
def reset_euc_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_shutdown_config` <a name="reset_idle_shutdown_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```python
def reset_idle_shutdown_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_machine_spec` <a name="reset_machine_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec"></a>

```python
def reset_machine_spec() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_spec` <a name="reset_network_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec"></a>

```python
def reset_network_spec() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_shielded_vm_config` <a name="reset_shielded_vm_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig"></a>

```python
def reset_shielded_vm_config() -> None
```

##### `reset_software_config` <a name="reset_software_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig"></a>

```python
def reset_software_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplate.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ColabRuntimeTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput">data_persistent_disk_spec_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput">euc_config_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput">idle_shutdown_config_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput">network_spec_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput">shielded_vm_config_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput">software_config_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_persistent_disk_spec`<sup>Required</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```python
data_persistent_disk_spec: ColabRuntimeTemplateDataPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec"></a>

```python
encryption_spec: ColabRuntimeTemplateEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `euc_config`<sup>Required</sup> <a name="euc_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig"></a>

```python
euc_config: ColabRuntimeTemplateEucConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `idle_shutdown_config`<sup>Required</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig"></a>

```python
idle_shutdown_config: ColabRuntimeTemplateIdleShutdownConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec"></a>

```python
machine_spec: ColabRuntimeTemplateMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `network_spec`<sup>Required</sup> <a name="network_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec"></a>

```python
network_spec: ColabRuntimeTemplateNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `shielded_vm_config`<sup>Required</sup> <a name="shielded_vm_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig"></a>

```python
shielded_vm_config: ColabRuntimeTemplateShieldedVmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `software_config`<sup>Required</sup> <a name="software_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig"></a>

```python
software_config: ColabRuntimeTemplateSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts"></a>

```python
timeouts: ColabRuntimeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `data_persistent_disk_spec_input`<sup>Optional</sup> <a name="data_persistent_disk_spec_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```python
data_persistent_disk_spec_input: ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput"></a>

```python
encryption_spec_input: ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `euc_config_input`<sup>Optional</sup> <a name="euc_config_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput"></a>

```python
euc_config_input: ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_shutdown_config_input`<sup>Optional</sup> <a name="idle_shutdown_config_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```python
idle_shutdown_config_input: ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput"></a>

```python
machine_spec_input: ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_spec_input`<sup>Optional</sup> <a name="network_spec_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput"></a>

```python
network_spec_input: ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `shielded_vm_config_input`<sup>Optional</sup> <a name="shielded_vm_config_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```python
shielded_vm_config_input: ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `software_config_input`<sup>Optional</sup> <a name="software_config_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput"></a>

```python
software_config_input: ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ColabRuntimeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateConfig <a name="ColabRuntimeTemplateConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  data_persistent_disk_spec: ColabRuntimeTemplateDataPersistentDiskSpec = None,
  description: str = None,
  encryption_spec: ColabRuntimeTemplateEncryptionSpec = None,
  euc_config: ColabRuntimeTemplateEucConfig = None,
  id: str = None,
  idle_shutdown_config: ColabRuntimeTemplateIdleShutdownConfig = None,
  labels: typing.Mapping[str] = None,
  machine_spec: ColabRuntimeTemplateMachineSpec = None,
  name: str = None,
  network_spec: ColabRuntimeTemplateNetworkSpec = None,
  network_tags: typing.List[str] = None,
  project: str = None,
  shielded_vm_config: ColabRuntimeTemplateShieldedVmConfig = None,
  software_config: ColabRuntimeTemplateSoftwareConfig = None,
  timeouts: ColabRuntimeTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description">description</a></code> | <code>str</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `data_persistent_disk_spec`<sup>Optional</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```python
data_persistent_disk_spec: ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```python
encryption_spec: ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `euc_config`<sup>Optional</sup> <a name="euc_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig"></a>

```python
euc_config: ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_shutdown_config`<sup>Optional</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```python
idle_shutdown_config: ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec"></a>

```python
machine_spec: ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec"></a>

```python
network_spec: ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `shielded_vm_config`<sup>Optional</sup> <a name="shielded_vm_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```python
shielded_vm_config: ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig"></a>

```python
software_config: ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts"></a>

```python
timeouts: ColabRuntimeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

### ColabRuntimeTemplateDataPersistentDiskSpec <a name="ColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec(
  disk_size_gb: str = None,
  disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">disk_type</a></code> | <code>str</code> | The type of the persistent disk. |

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}

---

### ColabRuntimeTemplateEncryptionSpec <a name="ColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}

---

### ColabRuntimeTemplateEucConfig <a name="ColabRuntimeTemplateEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateEucConfig(
  euc_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled">euc_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable end user credential access for the runtime. |

---

##### `euc_disabled`<sup>Optional</sup> <a name="euc_disabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```python
euc_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}

---

### ColabRuntimeTemplateIdleShutdownConfig <a name="ColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig(
  idle_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | The duration after which the runtime is automatically shut down. |

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}

---

### ColabRuntimeTemplateMachineSpec <a name="ColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type selected for the runtime. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}

---

### ColabRuntimeTemplateNetworkSpec <a name="ColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec(
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  network: str = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network">network</a></code> | <code>str</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork that this runtime is in. |

---

##### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}

---

### ColabRuntimeTemplateShieldedVmConfig <a name="ColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig(
  enable_secure_boot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables secure boot for the runtime. |

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}

---

### ColabRuntimeTemplateSoftwareConfig <a name="ColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig(
  env: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]] = None,
  post_startup_script_config: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">post_startup_script_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}

---

##### `post_startup_script_config`<sup>Optional</sup> <a name="post_startup_script_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```python
post_startup_script_config: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}

---

### ColabRuntimeTemplateSoftwareConfigEnv <a name="ColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value">value</a></code> | <code>str</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#value ColabRuntimeTemplate#value}

---

### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig(
  post_startup_script: str = None,
  post_startup_script_behavior: str = None,
  post_startup_script_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">post_startup_script_url</a></code> | <code>str</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}

---

##### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}

---

##### `post_startup_script_url`<sup>Optional</sup> <a name="post_startup_script_url" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```python
post_startup_script_url: str
```

- *Type:* str

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}

---

### ColabRuntimeTemplateTimeouts <a name="ColabRuntimeTemplateTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="ColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### ColabRuntimeTemplateEncryptionSpecOutputReference <a name="ColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---


### ColabRuntimeTemplateEucConfigOutputReference <a name="ColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">reset_euc_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_euc_disabled` <a name="reset_euc_disabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```python
def reset_euc_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">euc_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">euc_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `euc_disabled_input`<sup>Optional</sup> <a name="euc_disabled_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```python
euc_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `euc_disabled`<sup>Required</sup> <a name="euc_disabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```python
euc_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---


### ColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="ColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---


### ColabRuntimeTemplateMachineSpecOutputReference <a name="ColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---


### ColabRuntimeTemplateNetworkSpecOutputReference <a name="ColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">reset_enable_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_internet_access` <a name="reset_enable_internet_access" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```python
def reset_enable_internet_access() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">enable_internet_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_internet_access_input`<sup>Optional</sup> <a name="enable_internet_access_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```python
enable_internet_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---


### ColabRuntimeTemplateShieldedVmConfigOutputReference <a name="ColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigEnvList <a name="ColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ColabRuntimeTemplateSoftwareConfigEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]

---


### ColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="ColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ColabRuntimeTemplateSoftwareConfigEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]

---


### ColabRuntimeTemplateSoftwareConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">put_post_startup_script_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">reset_post_startup_script_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]

---

##### `put_post_startup_script_config` <a name="put_post_startup_script_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```python
def put_post_startup_script_config(
  post_startup_script: str = None,
  post_startup_script_behavior: str = None,
  post_startup_script_url: str = None
) -> None
```

###### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScript"></a>

- *Type:* str

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}

---

###### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScriptBehavior"></a>

- *Type:* str

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}

---

###### `post_startup_script_url`<sup>Optional</sup> <a name="post_startup_script_url" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScriptUrl"></a>

- *Type:* str

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}

---

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_post_startup_script_config` <a name="reset_post_startup_script_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```python
def reset_post_startup_script_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">post_startup_script_config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">post_startup_script_config_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```python
env: ColabRuntimeTemplateSoftwareConfigEnvList
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `post_startup_script_config`<sup>Required</sup> <a name="post_startup_script_config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```python
post_startup_script_config: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[ColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv">ColabRuntimeTemplateSoftwareConfigEnv</a>]]

---

##### `post_startup_script_config_input`<sup>Optional</sup> <a name="post_startup_script_config_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```python
post_startup_script_config_input: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">reset_post_startup_script_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">reset_post_startup_script_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_post_startup_script_behavior` <a name="reset_post_startup_script_behavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```python
def reset_post_startup_script_behavior() -> None
```

##### `reset_post_startup_script_url` <a name="reset_post_startup_script_url" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```python
def reset_post_startup_script_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">post_startup_script_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">post_startup_script_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">post_startup_script_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_startup_script_behavior_input`<sup>Optional</sup> <a name="post_startup_script_behavior_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```python
post_startup_script_behavior_input: str
```

- *Type:* str

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `post_startup_script_url_input`<sup>Optional</sup> <a name="post_startup_script_url_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```python
post_startup_script_url_input: str
```

- *Type:* str

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `post_startup_script_behavior`<sup>Required</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

---

##### `post_startup_script_url`<sup>Required</sup> <a name="post_startup_script_url" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```python
post_startup_script_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### ColabRuntimeTemplateTimeoutsOutputReference <a name="ColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime_template

colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ColabRuntimeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>]

---



