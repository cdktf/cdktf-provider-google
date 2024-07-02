# `filestoreInstance` Submodule <a name="`filestoreInstance` Submodule" id="@cdktf/provider-google.filestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FilestoreInstance <a name="FilestoreInstance" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_shares: FilestoreInstanceFileShares,
  name: str,
  networks: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]],
  tier: str,
  description: str = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: FilestoreInstanceTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.fileShares">file_shares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#id FilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#project FilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The name of the Filestore zone of the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_shares`<sup>Required</sup> <a name="file_shares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.fileShares"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#file_shares FilestoreInstance#file_shares}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#networks FilestoreInstance#networks}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.tier"></a>

- *Type:* str

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#tier FilestoreInstance#tier}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.description"></a>

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#description FilestoreInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#id FilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#labels FilestoreInstance#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.location"></a>

- *Type:* str

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#location FilestoreInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#project FilestoreInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#timeouts FilestoreInstance#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.zone"></a>

- *Type:* str

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#zone FilestoreInstance#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares">put_file_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_file_shares` <a name="put_file_shares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares"></a>

```python
def put_file_shares(
  capacity_gb: typing.Union[int, float],
  name: str,
  nfs_export_options: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]] = None,
  source_backup: str = None
) -> None
```

###### `capacity_gb`<sup>Required</sup> <a name="capacity_gb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.capacityGb"></a>

- *Type:* typing.Union[int, float]

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.name"></a>

- *Type:* str

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

###### `nfs_export_options`<sup>Optional</sup> <a name="nfs_export_options" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.nfsExportOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}

---

###### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.sourceBackup"></a>

- *Type:* str

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#source_backup FilestoreInstance#source_backup}

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#create FilestoreInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#update FilestoreInstance#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FilestoreInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares">file_shares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput">file_shares_input</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `file_shares`<sup>Required</sup> <a name="file_shares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares"></a>

```python
file_shares: FilestoreInstanceFileSharesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks"></a>

```python
networks: FilestoreInstanceNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts"></a>

```python
timeouts: FilestoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `file_shares_input`<sup>Optional</sup> <a name="file_shares_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput"></a>

```python
file_shares_input: FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FilestoreInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FilestoreInstanceConfig <a name="FilestoreInstanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_shares: FilestoreInstanceFileShares,
  name: str,
  networks: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]],
  tier: str,
  description: str = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: FilestoreInstanceTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares">file_shares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier">tier</a></code> | <code>str</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description">description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#id FilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location">location</a></code> | <code>str</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#project FilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone">zone</a></code> | <code>str</code> | The name of the Filestore zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_shares`<sup>Required</sup> <a name="file_shares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares"></a>

```python
file_shares: FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#file_shares FilestoreInstance#file_shares}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#networks FilestoreInstance#networks}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#tier FilestoreInstance#tier}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#description FilestoreInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#id FilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#labels FilestoreInstance#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#location FilestoreInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#project FilestoreInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts"></a>

```python
timeouts: FilestoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#timeouts FilestoreInstance#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#zone FilestoreInstance#zone}

---

### FilestoreInstanceFileShares <a name="FilestoreInstanceFileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceFileShares(
  capacity_gb: typing.Union[int, float],
  name: str,
  nfs_export_options: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]] = None,
  source_backup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb">capacity_gb</a></code> | <code>typing.Union[int, float]</code> | File share capacity in GiB. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name">name</a></code> | <code>str</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions">nfs_export_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]</code> | nfs_export_options block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup">source_backup</a></code> | <code>str</code> | The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from. |

---

##### `capacity_gb`<sup>Required</sup> <a name="capacity_gb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb"></a>

```python
capacity_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `nfs_export_options`<sup>Optional</sup> <a name="nfs_export_options" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions"></a>

```python
nfs_export_options: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}

---

##### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#source_backup FilestoreInstance#source_backup}

---

### FilestoreInstanceFileSharesNfsExportOptions <a name="FilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions(
  access_mode: str = None,
  anon_gid: typing.Union[int, float] = None,
  anon_uid: typing.Union[int, float] = None,
  ip_ranges: typing.List[str] = None,
  squash_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode">access_mode</a></code> | <code>str</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid">anon_gid</a></code> | <code>typing.Union[int, float]</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid">anon_uid</a></code> | <code>typing.Union[int, float]</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">ip_ranges</a></code> | <code>typing.List[str]</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode">squash_mode</a></code> | <code>str</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#access_mode FilestoreInstance#access_mode}

---

##### `anon_gid`<sup>Optional</sup> <a name="anon_gid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```python
anon_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#anon_gid FilestoreInstance#anon_gid}

---

##### `anon_uid`<sup>Optional</sup> <a name="anon_uid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```python
anon_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#anon_uid FilestoreInstance#anon_uid}

---

##### `ip_ranges`<sup>Optional</sup> <a name="ip_ranges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```python
ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}

---

##### `squash_mode`<sup>Optional</sup> <a name="squash_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```python
squash_mode: str
```

- *Type:* str

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#squash_mode FilestoreInstance#squash_mode}

---

### FilestoreInstanceNetworks <a name="FilestoreInstanceNetworks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceNetworks(
  modes: typing.List[str],
  network: str,
  connect_mode: str = None,
  reserved_ip_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes">modes</a></code> | <code>typing.List[str]</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network">network</a></code> | <code>str</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode">connect_mode</a></code> | <code>str</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#modes FilestoreInstance#modes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#network FilestoreInstance#network}

---

##### `connect_mode`<sup>Optional</sup> <a name="connect_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode"></a>

```python
connect_mode: str
```

- *Type:* str

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#connect_mode FilestoreInstance#connect_mode}

---

##### `reserved_ip_range`<sup>Optional</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}

---

### FilestoreInstanceTimeouts <a name="FilestoreInstanceTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#create FilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#update FilestoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#create FilestoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/filestore_instance#update FilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FilestoreInstanceFileSharesNfsExportOptionsList <a name="FilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]

---


### FilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="FilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">reset_anon_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">reset_anon_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">reset_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">reset_squash_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_anon_gid` <a name="reset_anon_gid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```python
def reset_anon_gid() -> None
```

##### `reset_anon_uid` <a name="reset_anon_uid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```python
def reset_anon_uid() -> None
```

##### `reset_ip_ranges` <a name="reset_ip_ranges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```python
def reset_ip_ranges() -> None
```

##### `reset_squash_mode` <a name="reset_squash_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```python
def reset_squash_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">anon_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">anon_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">squash_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">anon_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">anon_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">squash_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `anon_gid_input`<sup>Optional</sup> <a name="anon_gid_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```python
anon_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anon_uid_input`<sup>Optional</sup> <a name="anon_uid_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```python
anon_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_ranges_input`<sup>Optional</sup> <a name="ip_ranges_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```python
ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `squash_mode_input`<sup>Optional</sup> <a name="squash_mode_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```python
squash_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `anon_gid`<sup>Required</sup> <a name="anon_gid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```python
anon_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anon_uid`<sup>Required</sup> <a name="anon_uid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```python
anon_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_ranges`<sup>Required</sup> <a name="ip_ranges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```python
ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `squash_mode`<sup>Required</sup> <a name="squash_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```python
squash_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FilestoreInstanceFileSharesNfsExportOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]

---


### FilestoreInstanceFileSharesOutputReference <a name="FilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceFileSharesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions">put_nfs_export_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">reset_nfs_export_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup">reset_source_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs_export_options` <a name="put_nfs_export_options" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```python
def put_nfs_export_options(
  value: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]

---

##### `reset_nfs_export_options` <a name="reset_nfs_export_options" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```python
def reset_nfs_export_options() -> None
```

##### `reset_source_backup` <a name="reset_source_backup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup"></a>

```python
def reset_source_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">nfs_export_options</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput">capacity_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">nfs_export_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput">source_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb">capacity_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup">source_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs_export_options`<sup>Required</sup> <a name="nfs_export_options" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```python
nfs_export_options: FilestoreInstanceFileSharesNfsExportOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `capacity_gb_input`<sup>Optional</sup> <a name="capacity_gb_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```python
capacity_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_export_options_input`<sup>Optional</sup> <a name="nfs_export_options_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```python
nfs_export_options_input: typing.Union[IResolvable, typing.List[FilestoreInstanceFileSharesNfsExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>]]

---

##### `source_backup_input`<sup>Optional</sup> <a name="source_backup_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput"></a>

```python
source_backup_input: str
```

- *Type:* str

---

##### `capacity_gb`<sup>Required</sup> <a name="capacity_gb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```python
capacity_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_backup`<sup>Required</sup> <a name="source_backup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```python
internal_value: FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---


### FilestoreInstanceNetworksList <a name="FilestoreInstanceNetworksList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FilestoreInstanceNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]]

---


### FilestoreInstanceNetworksOutputReference <a name="FilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode">reset_connect_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange">reset_reserved_ip_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connect_mode` <a name="reset_connect_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```python
def reset_connect_mode() -> None
```

##### `reset_reserved_ip_range` <a name="reset_reserved_ip_range" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```python
def reset_reserved_ip_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput">connect_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput">modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">reserved_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode">connect_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes">modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connect_mode_input`<sup>Optional</sup> <a name="connect_mode_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```python
connect_mode_input: str
```

- *Type:* str

---

##### `modes_input`<sup>Optional</sup> <a name="modes_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```python
modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `reserved_ip_range_input`<sup>Optional</sup> <a name="reserved_ip_range_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```python
reserved_ip_range_input: str
```

- *Type:* str

---

##### `connect_mode`<sup>Required</sup> <a name="connect_mode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```python
connect_mode: str
```

- *Type:* str

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FilestoreInstanceNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>]

---


### FilestoreInstanceTimeoutsOutputReference <a name="FilestoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import filestore_instance

filestoreInstance.FilestoreInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FilestoreInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>]

---



