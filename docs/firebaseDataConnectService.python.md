# `firebaseDataConnectService` Submodule <a name="`firebaseDataConnectService` Submodule" id="@cdktf/provider-google.firebaseDataConnectService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseDataConnectService <a name="FirebaseDataConnectService" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service google_firebase_data_connect_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseDataConnectServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.location">location</a></code> | <code>str</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.location"></a>

- *Type:* str

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#location FirebaseDataConnectService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.serviceId"></a>

- *Type:* str

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#service_id FirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#annotations FirebaseDataConnectService#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#deletion_policy FirebaseDataConnectService#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#display_name FirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#labels FirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#timeouts FirebaseDataConnectService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#create FirebaseDataConnectService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#delete FirebaseDataConnectService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#update FirebaseDataConnectService#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseDataConnectService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseDataConnectService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseDataConnectService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseDataConnectService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseDataConnectService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference">FirebaseDataConnectServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeouts"></a>

```python
timeouts: FirebaseDataConnectServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference">FirebaseDataConnectServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaseDataConnectServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseDataConnectServiceConfig <a name="FirebaseDataConnectServiceConfig" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseDataConnectServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.location">location</a></code> | <code>str</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#location FirebaseDataConnectService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#service_id FirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#annotations FirebaseDataConnectService#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#deletion_policy FirebaseDataConnectService#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#display_name FirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#labels FirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.timeouts"></a>

```python
timeouts: FirebaseDataConnectServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#timeouts FirebaseDataConnectService#timeouts}

---

### FirebaseDataConnectServiceTimeouts <a name="FirebaseDataConnectServiceTimeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#create FirebaseDataConnectService#create}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#delete FirebaseDataConnectService#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#update FirebaseDataConnectService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#create FirebaseDataConnectService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#delete FirebaseDataConnectService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_data_connect_service#update FirebaseDataConnectService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseDataConnectServiceTimeoutsOutputReference <a name="FirebaseDataConnectServiceTimeoutsOutputReference" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_data_connect_service

firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaseDataConnectServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>]

---



