# `apphubWorkload` Submodule <a name="`apphubWorkload` Submodule" id="@cdktf/provider-google.apphubWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubWorkload <a name="ApphubWorkload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload google_apphub_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkload(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  discovered_workload: str,
  location: str,
  workload_id: str,
  attributes: ApphubWorkloadAttributes = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApphubWorkloadTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.discoveredWorkload">discovered_workload</a></code> | <code>str</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.workloadId">workload_id</a></code> | <code>str</code> | The Workload identifier. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.description">description</a></code> | <code>str</code> | User-defined description of a Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined name for the Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.applicationId"></a>

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#application_id ApphubWorkload#application_id}

---

##### `discovered_workload`<sup>Required</sup> <a name="discovered_workload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.discoveredWorkload"></a>

- *Type:* str

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#discovered_workload ApphubWorkload#discovered_workload}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#location ApphubWorkload#location}

---

##### `workload_id`<sup>Required</sup> <a name="workload_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.workloadId"></a>

- *Type:* str

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#workload_id ApphubWorkload#workload_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#attributes ApphubWorkload#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.description"></a>

- *Type:* str

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#description ApphubWorkload#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#timeouts ApphubWorkload#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes"></a>

```python
def put_attributes(
  business_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]] = None,
  criticality: ApphubWorkloadAttributesCriticality = None,
  developer_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]] = None,
  environment: ApphubWorkloadAttributesEnvironment = None,
  operator_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]] = None
) -> None
```

###### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.businessOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#business_owners ApphubWorkload#business_owners}

---

###### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.criticality"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#criticality ApphubWorkload#criticality}

---

###### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.developerOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#developer_owners ApphubWorkload#developer_owners}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.environment"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#environment ApphubWorkload#environment}

---

###### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.operatorOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#operator_owners ApphubWorkload#operator_owners}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#create ApphubWorkload#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#delete ApphubWorkload#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#update ApphubWorkload#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApphubWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkload.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApphubWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApphubWorkload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApphubWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApphubWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties">workload_properties</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference">workload_reference</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput">attributes_input</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput">discovered_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput">workload_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload">discovered_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadId">workload_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributes"></a>

```python
attributes: ApphubWorkloadAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeouts"></a>

```python
timeouts: ApphubWorkloadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_properties`<sup>Required</sup> <a name="workload_properties" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties"></a>

```python
workload_properties: ApphubWorkloadWorkloadPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a>

---

##### `workload_reference`<sup>Required</sup> <a name="workload_reference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference"></a>

```python
workload_reference: ApphubWorkloadWorkloadReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput"></a>

```python
attributes_input: ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovered_workload_input`<sup>Optional</sup> <a name="discovered_workload_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput"></a>

```python
discovered_workload_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApphubWorkloadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>]

---

##### `workload_id_input`<sup>Optional</sup> <a name="workload_id_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput"></a>

```python
workload_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovered_workload`<sup>Required</sup> <a name="discovered_workload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload"></a>

```python
discovered_workload: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_id`<sup>Required</sup> <a name="workload_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadId"></a>

```python
workload_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubWorkloadAttributes <a name="ApphubWorkloadAttributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributes(
  business_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]] = None,
  criticality: ApphubWorkloadAttributesCriticality = None,
  developer_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]] = None,
  environment: ApphubWorkloadAttributesEnvironment = None,
  operator_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners">business_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]</code> | business_owners block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners">developer_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]</code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners">operator_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]</code> | operator_owners block. |

---

##### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners"></a>

```python
business_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#business_owners ApphubWorkload#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality"></a>

```python
criticality: ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#criticality ApphubWorkload#criticality}

---

##### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners"></a>

```python
developer_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#developer_owners ApphubWorkload#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment"></a>

```python
environment: ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#environment ApphubWorkload#environment}

---

##### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners"></a>

```python
operator_owners: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#operator_owners ApphubWorkload#operator_owners}

---

### ApphubWorkloadAttributesBusinessOwners <a name="ApphubWorkloadAttributesBusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesBusinessOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email">email</a></code> | <code>str</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesCriticality <a name="ApphubWorkloadAttributesCriticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesCriticality(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type">type</a></code> | <code>str</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type"></a>

```python
type: str
```

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesDeveloperOwners <a name="ApphubWorkloadAttributesDeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesDeveloperOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email">email</a></code> | <code>str</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesEnvironment <a name="ApphubWorkloadAttributesEnvironment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesEnvironment(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type">type</a></code> | <code>str</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesOperatorOwners <a name="ApphubWorkloadAttributesOperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesOperatorOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email">email</a></code> | <code>str</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadConfig <a name="ApphubWorkloadConfig" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  discovered_workload: str,
  location: str,
  workload_id: str,
  attributes: ApphubWorkloadAttributes = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApphubWorkloadTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId">application_id</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload">discovered_workload</a></code> | <code>str</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId">workload_id</a></code> | <code>str</code> | The Workload identifier. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description">description</a></code> | <code>str</code> | User-defined description of a Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined name for the Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#application_id ApphubWorkload#application_id}

---

##### `discovered_workload`<sup>Required</sup> <a name="discovered_workload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload"></a>

```python
discovered_workload: str
```

- *Type:* str

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#discovered_workload ApphubWorkload#discovered_workload}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#location ApphubWorkload#location}

---

##### `workload_id`<sup>Required</sup> <a name="workload_id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId"></a>

```python
workload_id: str
```

- *Type:* str

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#workload_id ApphubWorkload#workload_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes"></a>

```python
attributes: ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#attributes ApphubWorkload#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#description ApphubWorkload#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts"></a>

```python
timeouts: ApphubWorkloadTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#timeouts ApphubWorkload#timeouts}

---

### ApphubWorkloadTimeouts <a name="ApphubWorkloadTimeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#create ApphubWorkload#create}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#delete ApphubWorkload#delete}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#update ApphubWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#create ApphubWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#delete ApphubWorkload#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#update ApphubWorkload#update}.

---

### ApphubWorkloadWorkloadProperties <a name="ApphubWorkloadWorkloadProperties" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadProperties()
```


### ApphubWorkloadWorkloadReference <a name="ApphubWorkloadWorkloadReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadReference()
```


## Classes <a name="Classes" id="Classes"></a>

### ApphubWorkloadAttributesBusinessOwnersList <a name="ApphubWorkloadAttributesBusinessOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApphubWorkloadAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]

---


### ApphubWorkloadAttributesBusinessOwnersOutputReference <a name="ApphubWorkloadAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApphubWorkloadAttributesBusinessOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]

---


### ApphubWorkloadAttributesCriticalityOutputReference <a name="ApphubWorkloadAttributesCriticalityOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue"></a>

```python
internal_value: ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---


### ApphubWorkloadAttributesDeveloperOwnersList <a name="ApphubWorkloadAttributesDeveloperOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApphubWorkloadAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]

---


### ApphubWorkloadAttributesDeveloperOwnersOutputReference <a name="ApphubWorkloadAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApphubWorkloadAttributesDeveloperOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]

---


### ApphubWorkloadAttributesEnvironmentOutputReference <a name="ApphubWorkloadAttributesEnvironmentOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---


### ApphubWorkloadAttributesOperatorOwnersList <a name="ApphubWorkloadAttributesOperatorOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApphubWorkloadAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]

---


### ApphubWorkloadAttributesOperatorOwnersOutputReference <a name="ApphubWorkloadAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApphubWorkloadAttributesOperatorOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]

---


### ApphubWorkloadAttributesOutputReference <a name="ApphubWorkloadAttributesOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners">put_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality">put_criticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners">put_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners">put_operator_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners">reset_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality">reset_criticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners">reset_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners">reset_operator_owners</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_business_owners` <a name="put_business_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners"></a>

```python
def put_business_owners(
  value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]

---

##### `put_criticality` <a name="put_criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality"></a>

```python
def put_criticality(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality.parameter.type"></a>

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

##### `put_developer_owners` <a name="put_developer_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners"></a>

```python
def put_developer_owners(
  value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]

---

##### `put_environment` <a name="put_environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment"></a>

```python
def put_environment(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment.parameter.type"></a>

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

##### `put_operator_owners` <a name="put_operator_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners"></a>

```python
def put_operator_owners(
  value: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]

---

##### `reset_business_owners` <a name="reset_business_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners"></a>

```python
def reset_business_owners() -> None
```

##### `reset_criticality` <a name="reset_criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality"></a>

```python
def reset_criticality() -> None
```

##### `reset_developer_owners` <a name="reset_developer_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners"></a>

```python
def reset_developer_owners() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_operator_owners` <a name="reset_operator_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners"></a>

```python
def reset_operator_owners() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners">business_owners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners">developer_owners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners">operator_owners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput">business_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput">criticality_input</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput">developer_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput">operator_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_owners`<sup>Required</sup> <a name="business_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners"></a>

```python
business_owners: ApphubWorkloadAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality"></a>

```python
criticality: ApphubWorkloadAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a>

---

##### `developer_owners`<sup>Required</sup> <a name="developer_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners"></a>

```python
developer_owners: ApphubWorkloadAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment"></a>

```python
environment: ApphubWorkloadAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a>

---

##### `operator_owners`<sup>Required</sup> <a name="operator_owners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners"></a>

```python
operator_owners: ApphubWorkloadAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a>

---

##### `business_owners_input`<sup>Optional</sup> <a name="business_owners_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput"></a>

```python
business_owners_input: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>]]

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput"></a>

```python
criticality_input: ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---

##### `developer_owners_input`<sup>Optional</sup> <a name="developer_owners_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput"></a>

```python
developer_owners_input: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>]]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput"></a>

```python
environment_input: ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---

##### `operator_owners_input`<sup>Optional</sup> <a name="operator_owners_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput"></a>

```python
operator_owners_input: typing.Union[IResolvable, typing.List[ApphubWorkloadAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue"></a>

```python
internal_value: ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---


### ApphubWorkloadTimeoutsOutputReference <a name="ApphubWorkloadTimeoutsOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApphubWorkloadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>]

---


### ApphubWorkloadWorkloadPropertiesList <a name="ApphubWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApphubWorkloadWorkloadPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApphubWorkloadWorkloadPropertiesOutputReference <a name="ApphubWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject">gcp_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_project`<sup>Required</sup> <a name="gcp_project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```python
gcp_project: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ApphubWorkloadWorkloadProperties
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a>

---


### ApphubWorkloadWorkloadReferenceList <a name="ApphubWorkloadWorkloadReferenceList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApphubWorkloadWorkloadReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApphubWorkloadWorkloadReferenceOutputReference <a name="ApphubWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apphub_workload

apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```python
internal_value: ApphubWorkloadWorkloadReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a>

---



