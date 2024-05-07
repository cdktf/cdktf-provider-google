# `bigqueryBiReservation` Submodule <a name="`bigqueryBiReservation` Submodule" id="@cdktf/provider-google.bigqueryBiReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryBiReservation <a name="BigqueryBiReservation" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation google_bigquery_bi_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservation(
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
  id: str = None,
  preferred_tables: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]] = None,
  project: str = None,
  size: typing.Union[int, float] = None,
  timeouts: BigqueryBiReservationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.location">location</a></code> | <code>str</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.preferredTables">preferred_tables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]</code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.location"></a>

- *Type:* str

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#location BigqueryBiReservation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_tables`<sup>Optional</sup> <a name="preferred_tables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.preferredTables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#preferred_tables BigqueryBiReservation#preferred_tables}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#size BigqueryBiReservation#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#timeouts BigqueryBiReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables">put_preferred_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables">reset_preferred_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_preferred_tables` <a name="put_preferred_tables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables"></a>

```python
def put_preferred_tables(
  value: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preferred_tables` <a name="reset_preferred_tables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables"></a>

```python
def reset_preferred_tables() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryBiReservation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryBiReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryBiReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryBiReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryBiReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables">preferred_tables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput">preferred_tables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preferred_tables`<sup>Required</sup> <a name="preferred_tables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables"></a>

```python
preferred_tables: BigqueryBiReservationPreferredTablesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts"></a>

```python
timeouts: BigqueryBiReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `preferred_tables_input`<sup>Optional</sup> <a name="preferred_tables_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput"></a>

```python
preferred_tables_input: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryBiReservationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryBiReservationConfig <a name="BigqueryBiReservationConfig" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  preferred_tables: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]] = None,
  project: str = None,
  size: typing.Union[int, float] = None,
  timeouts: BigqueryBiReservationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location">location</a></code> | <code>str</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables">preferred_tables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]</code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#location BigqueryBiReservation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_tables`<sup>Optional</sup> <a name="preferred_tables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables"></a>

```python
preferred_tables: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#preferred_tables BigqueryBiReservation#preferred_tables}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#size BigqueryBiReservation#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts"></a>

```python
timeouts: BigqueryBiReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#timeouts BigqueryBiReservation#timeouts}

---

### BigqueryBiReservationPreferredTables <a name="BigqueryBiReservationPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationPreferredTables(
  dataset_id: str = None,
  project_id: str = None,
  table_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset in the above project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId">project_id</a></code> | <code>str</code> | The assigned project ID of the project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table in the above dataset. |

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset in the above project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#dataset_id BigqueryBiReservation#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The assigned project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#project_id BigqueryBiReservation#project_id}

---

##### `table_id`<sup>Optional</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table in the above dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#table_id BigqueryBiReservation#table_id}

---

### BigqueryBiReservationTimeouts <a name="BigqueryBiReservationTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryBiReservationPreferredTablesList <a name="BigqueryBiReservationPreferredTablesList" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationPreferredTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryBiReservationPreferredTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigqueryBiReservationPreferredTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]]

---


### BigqueryBiReservationPreferredTablesOutputReference <a name="BigqueryBiReservationPreferredTablesOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId">reset_table_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_table_id` <a name="reset_table_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId"></a>

```python
def reset_table_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryBiReservationPreferredTables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>]

---


### BigqueryBiReservationTimeoutsOutputReference <a name="BigqueryBiReservationTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_bi_reservation

bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryBiReservationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>]

---



