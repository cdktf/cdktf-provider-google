# `healthcareDicomStore` Submodule <a name="`healthcareDicomStore` Submodule" id="@cdktf/provider-google.healthcareDicomStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDicomStore <a name="HealthcareDicomStore" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store google_healthcare_dicom_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: HealthcareDicomStoreNotificationConfig = None,
  timeouts: HealthcareDicomStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#id HealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.dataset"></a>

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#dataset HealthcareDicomStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#name HealthcareDicomStore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#id HealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#labels HealthcareDicomStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#notification_config HealthcareDicomStore#notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#timeouts HealthcareDicomStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig"></a>

```python
def put_notification_config(
  pubsub_topic: str,
  send_for_bulk_import: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#pubsub_topic HealthcareDicomStore#pubsub_topic}

---

###### `send_for_bulk_import`<sup>Optional</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig.parameter.sendForBulkImport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#send_for_bulk_import HealthcareDicomStore#send_for_bulk_import}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#create HealthcareDicomStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#delete HealthcareDicomStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#update HealthcareDicomStore#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HealthcareDicomStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HealthcareDicomStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthcareDicomStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthcareDicomStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareDicomStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference">HealthcareDicomStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference">HealthcareDicomStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfig"></a>

```python
notification_config: HealthcareDicomStoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference">HealthcareDicomStoreNotificationConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeouts"></a>

```python
timeouts: HealthcareDicomStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference">HealthcareDicomStoreTimeoutsOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfigInput"></a>

```python
notification_config_input: HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HealthcareDicomStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDicomStoreConfig <a name="HealthcareDicomStoreConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: HealthcareDicomStoreNotificationConfig = None,
  timeouts: HealthcareDicomStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.name">name</a></code> | <code>str</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#id HealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#dataset HealthcareDicomStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#name HealthcareDicomStore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#id HealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#labels HealthcareDicomStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.notificationConfig"></a>

```python
notification_config: HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#notification_config HealthcareDicomStore#notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.timeouts"></a>

```python
timeouts: HealthcareDicomStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#timeouts HealthcareDicomStore#timeouts}

---

### HealthcareDicomStoreNotificationConfig <a name="HealthcareDicomStoreNotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStoreNotificationConfig(
  pubsub_topic: str,
  send_for_bulk_import: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.sendForBulkImport">send_for_bulk_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#pubsub_topic HealthcareDicomStore#pubsub_topic}

---

##### `send_for_bulk_import`<sup>Optional</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.sendForBulkImport"></a>

```python
send_for_bulk_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#send_for_bulk_import HealthcareDicomStore#send_for_bulk_import}

---

### HealthcareDicomStoreTimeouts <a name="HealthcareDicomStoreTimeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#create HealthcareDicomStore#create}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#delete HealthcareDicomStore#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#update HealthcareDicomStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#create HealthcareDicomStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#delete HealthcareDicomStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/healthcare_dicom_store#update HealthcareDicomStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDicomStoreNotificationConfigOutputReference <a name="HealthcareDicomStoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport">reset_send_for_bulk_import</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_send_for_bulk_import` <a name="reset_send_for_bulk_import" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport"></a>

```python
def reset_send_for_bulk_import() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput">send_for_bulk_import_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport">send_for_bulk_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `send_for_bulk_import_input`<sup>Optional</sup> <a name="send_for_bulk_import_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput"></a>

```python
send_for_bulk_import_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `send_for_bulk_import`<sup>Required</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport"></a>

```python
send_for_bulk_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

---


### HealthcareDicomStoreTimeoutsOutputReference <a name="HealthcareDicomStoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dicom_store

healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcareDicomStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>]

---



