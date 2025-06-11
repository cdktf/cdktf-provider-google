# `chronicleRetrohunt` Submodule <a name="`chronicleRetrohunt` Submodule" id="@cdktf/provider-google.chronicleRetrohunt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRetrohunt <a name="ChronicleRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt google_chronicle_retrohunt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohunt(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  process_interval: ChronicleRetrohuntProcessInterval,
  rule: str,
  id: str = None,
  project: str = None,
  retrohunt: str = None,
  timeouts: ChronicleRetrohuntTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.retrohunt">retrohunt</a></code> | <code>str</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.processInterval"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.rule"></a>

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.retrohunt"></a>

- *Type:* str

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval">put_process_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt">reset_retrohunt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_process_interval` <a name="put_process_interval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval"></a>

```python
def put_process_interval(
  end_time: str,
  start_time: str
) -> None
```

###### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval.parameter.endTime"></a>

- *Type:* str

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#end_time ChronicleRetrohunt#end_time}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval.parameter.startTime"></a>

- *Type:* str

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#start_time ChronicleRetrohunt#start_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_retrohunt` <a name="reset_retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt"></a>

```python
def reset_retrohunt() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohunt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohunt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohunt.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohunt.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleRetrohunt to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleRetrohunt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRetrohunt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval">execution_interval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage">progress_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput">process_interval_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput">retrohunt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt">retrohunt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule">rule</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_interval`<sup>Required</sup> <a name="execution_interval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval"></a>

```python
execution_interval: ChronicleRetrohuntExecutionIntervalList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval"></a>

```python
process_interval: ChronicleRetrohuntProcessIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a>

---

##### `progress_percentage`<sup>Required</sup> <a name="progress_percentage" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage"></a>

```python
progress_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts"></a>

```python
timeouts: ChronicleRetrohuntTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `process_interval_input`<sup>Optional</sup> <a name="process_interval_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput"></a>

```python
process_interval_input: ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retrohunt_input`<sup>Optional</sup> <a name="retrohunt_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput"></a>

```python
retrohunt_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChronicleRetrohuntTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retrohunt`<sup>Required</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt"></a>

```python
retrohunt: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRetrohuntConfig <a name="ChronicleRetrohuntConfig" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  process_interval: ChronicleRetrohuntProcessInterval,
  rule: str,
  id: str = None,
  project: str = None,
  retrohunt: str = None,
  timeouts: ChronicleRetrohuntTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt">retrohunt</a></code> | <code>str</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval"></a>

```python
process_interval: ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule"></a>

```python
rule: str
```

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt"></a>

```python
retrohunt: str
```

- *Type:* str

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts"></a>

```python
timeouts: ChronicleRetrohuntTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

### ChronicleRetrohuntExecutionInterval <a name="ChronicleRetrohuntExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntExecutionInterval()
```


### ChronicleRetrohuntProcessInterval <a name="ChronicleRetrohuntProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntProcessInterval(
  end_time: str,
  start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime">end_time</a></code> | <code>str</code> | Exclusive end of the interval. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime">start_time</a></code> | <code>str</code> | Inclusive start of the interval. |

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#end_time ChronicleRetrohunt#end_time}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#start_time ChronicleRetrohunt#start_time}

---

### ChronicleRetrohuntTimeouts <a name="ChronicleRetrohuntTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRetrohuntExecutionIntervalList <a name="ChronicleRetrohuntExecutionIntervalList" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleRetrohuntExecutionIntervalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChronicleRetrohuntExecutionIntervalOutputReference <a name="ChronicleRetrohuntExecutionIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleRetrohuntExecutionInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a>

---


### ChronicleRetrohuntProcessIntervalOutputReference <a name="ChronicleRetrohuntProcessIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---


### ChronicleRetrohuntTimeoutsOutputReference <a name="ChronicleRetrohuntTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_retrohunt

chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleRetrohuntTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>]

---



