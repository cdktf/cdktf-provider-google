# `firebaseAppHostingBuild` Submodule <a name="`firebaseAppHostingBuild` Submodule" id="@cdktf/provider-google.firebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBuild <a name="FirebaseAppHostingBuild" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuild(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  build_id: str,
  location: str,
  source: FirebaseAppHostingBuildSource,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseAppHostingBuildTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.buildId">build_id</a></code> | <code>str</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.backend"></a>

- *Type:* str

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.buildId"></a>

- *Type:* str

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.location"></a>

- *Type:* str

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource"></a>

```python
def put_source(
  codebase: FirebaseAppHostingBuildSourceCodebase = None,
  container: FirebaseAppHostingBuildSourceContainer = None
) -> None
```

###### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource.parameter.codebase"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#codebase FirebaseAppHostingBuild#codebase}

---

###### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#container FirebaseAppHostingBuild#container}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuild.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuild.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuild.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuild.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppHostingBuild to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri">build_logs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource">error_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput">build_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId">build_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `build_logs_uri`<sup>Required</sup> <a name="build_logs_uri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri"></a>

```python
build_logs_uri: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error"></a>

```python
error: FirebaseAppHostingBuildErrorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a>

---

##### `error_source`<sup>Required</sup> <a name="error_source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource"></a>

```python
error_source: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source"></a>

```python
source: FirebaseAppHostingBuildSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingBuildTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `build_id_input`<sup>Optional</sup> <a name="build_id_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput"></a>

```python
build_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput"></a>

```python
source_input: FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FirebaseAppHostingBuildTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBuildConfig <a name="FirebaseAppHostingBuildConfig" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  build_id: str,
  location: str,
  source: FirebaseAppHostingBuildSource,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseAppHostingBuildTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend">backend</a></code> | <code>str</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId">build_id</a></code> | <code>str</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location">location</a></code> | <code>str</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source"></a>

```python
source: FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingBuildTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

### FirebaseAppHostingBuildError <a name="FirebaseAppHostingBuildError" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildError()
```


### FirebaseAppHostingBuildSource <a name="FirebaseAppHostingBuildSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSource(
  codebase: FirebaseAppHostingBuildSourceCodebase = None,
  container: FirebaseAppHostingBuildSourceContainer = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase"></a>

```python
codebase: FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#codebase FirebaseAppHostingBuild#codebase}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container"></a>

```python
container: FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#container FirebaseAppHostingBuild#container}

---

### FirebaseAppHostingBuildSourceCodebase <a name="FirebaseAppHostingBuildSourceCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase(
  branch: str = None,
  commit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch">branch</a></code> | <code>str</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit">commit</a></code> | <code>str</code> | The commit in the codebase to build from. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```python
branch: str
```

- *Type:* str

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#branch FirebaseAppHostingBuild#branch}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```python
commit: str
```

- *Type:* str

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#commit FirebaseAppHostingBuild#commit}

---

### FirebaseAppHostingBuildSourceCodebaseAuthor <a name="FirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor()
```


### FirebaseAppHostingBuildSourceContainer <a name="FirebaseAppHostingBuildSourceContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer(
  image: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image">image</a></code> | <code>str</code> | A URI representing a container for the backend to use. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image"></a>

```python
image: str
```

- *Type:* str

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#image FirebaseAppHostingBuild#image}

---

### FirebaseAppHostingBuildTimeouts <a name="FirebaseAppHostingBuildTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBuildErrorList <a name="FirebaseAppHostingBuildErrorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseAppHostingBuildErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseAppHostingBuildErrorOutputReference <a name="FirebaseAppHostingBuildErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBuildError
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a>

---


### FirebaseAppHostingBuildSourceCodebaseAuthorList <a name="FirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBuildSourceCodebaseAuthor
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### FirebaseAppHostingBuildSourceCodebaseOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">reset_commit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_commit` <a name="reset_commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">author</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">commit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```python
author: FirebaseAppHostingBuildSourceCodebaseAuthorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `commit_time`<sup>Required</sup> <a name="commit_time" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```python
commit_time: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```python
hash: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---


### FirebaseAppHostingBuildSourceContainerOutputReference <a name="FirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---


### FirebaseAppHostingBuildSourceOutputReference <a name="FirebaseAppHostingBuildSourceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase">put_codebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase">reset_codebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer">reset_container</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_codebase` <a name="put_codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```python
def put_codebase(
  branch: str = None,
  commit: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.branch"></a>

- *Type:* str

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#branch FirebaseAppHostingBuild#branch}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.commit"></a>

- *Type:* str

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#commit FirebaseAppHostingBuild#commit}

---

##### `put_container` <a name="put_container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```python
def put_container(
  image: str
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.image"></a>

- *Type:* str

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_build#image FirebaseAppHostingBuild#image}

---

##### `reset_codebase` <a name="reset_codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```python
def reset_codebase() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">codebase_input</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput">container_input</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codebase`<sup>Required</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```python
codebase: FirebaseAppHostingBuildSourceCodebaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```python
container: FirebaseAppHostingBuildSourceContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `codebase_input`<sup>Optional</sup> <a name="codebase_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```python
codebase_input: FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```python
container_input: FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---


### FirebaseAppHostingBuildTimeoutsOutputReference <a name="FirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_build

firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseAppHostingBuildTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---



