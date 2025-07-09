# `chronicleWatchlist` Submodule <a name="`chronicleWatchlist` Submodule" id="@cdktf/provider-google.chronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleWatchlist <a name="ChronicleWatchlist" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlist(
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
  entity_population_mechanism: ChronicleWatchlistEntityPopulationMechanism,
  instance: str,
  location: str,
  description: str = None,
  id: str = None,
  multiplying_factor: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ChronicleWatchlistTimeouts = None,
  watchlist_id: str = None,
  watchlist_user_preferences: ChronicleWatchlistWatchlistUserPreferences = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.entityPopulationMechanism">entity_population_mechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.multiplyingFactor">multiplying_factor</a></code> | <code>typing.Union[int, float]</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistId">watchlist_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistUserPreferences">watchlist_user_preferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.displayName"></a>

- *Type:* str

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `entity_population_mechanism`<sup>Required</sup> <a name="entity_population_mechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.entityPopulationMechanism"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplying_factor`<sup>Optional</sup> <a name="multiplying_factor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.multiplyingFactor"></a>

- *Type:* typing.Union[int, float]

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `watchlist_id`<sup>Optional</sup> <a name="watchlist_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistId"></a>

- *Type:* str

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `watchlist_user_preferences`<sup>Optional</sup> <a name="watchlist_user_preferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistUserPreferences"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism">put_entity_population_mechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences">put_watchlist_user_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor">reset_multiplying_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId">reset_watchlist_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences">reset_watchlist_user_preferences</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_population_mechanism` <a name="put_entity_population_mechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism"></a>

```python
def put_entity_population_mechanism(
  manual: ChronicleWatchlistEntityPopulationMechanismManual = None
) -> None
```

###### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism.parameter.manual"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

##### `put_watchlist_user_preferences` <a name="put_watchlist_user_preferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences"></a>

```python
def put_watchlist_user_preferences(
  pinned: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences.parameter.pinned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multiplying_factor` <a name="reset_multiplying_factor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor"></a>

```python
def reset_multiplying_factor() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_watchlist_id` <a name="reset_watchlist_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId"></a>

```python
def reset_watchlist_id() -> None
```

##### `reset_watchlist_user_preferences` <a name="reset_watchlist_user_preferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences"></a>

```python
def reset_watchlist_user_preferences() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlist.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlist.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlist.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlist.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleWatchlist to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount">entity_count</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism">entity_population_mechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences">watchlist_user_preferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput">entity_population_mechanism_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput">multiplying_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput">watchlist_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput">watchlist_user_preferences_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor">multiplying_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId">watchlist_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `entity_count`<sup>Required</sup> <a name="entity_count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount"></a>

```python
entity_count: ChronicleWatchlistEntityCountList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a>

---

##### `entity_population_mechanism`<sup>Required</sup> <a name="entity_population_mechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism"></a>

```python
entity_population_mechanism: ChronicleWatchlistEntityPopulationMechanismOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts"></a>

```python
timeouts: ChronicleWatchlistTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `watchlist_user_preferences`<sup>Required</sup> <a name="watchlist_user_preferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences"></a>

```python
watchlist_user_preferences: ChronicleWatchlistWatchlistUserPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entity_population_mechanism_input`<sup>Optional</sup> <a name="entity_population_mechanism_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```python
entity_population_mechanism_input: ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multiplying_factor_input`<sup>Optional</sup> <a name="multiplying_factor_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput"></a>

```python
multiplying_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChronicleWatchlistTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>]

---

##### `watchlist_id_input`<sup>Optional</sup> <a name="watchlist_id_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput"></a>

```python
watchlist_id_input: str
```

- *Type:* str

---

##### `watchlist_user_preferences_input`<sup>Optional</sup> <a name="watchlist_user_preferences_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```python
watchlist_user_preferences_input: ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multiplying_factor`<sup>Required</sup> <a name="multiplying_factor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor"></a>

```python
multiplying_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `watchlist_id`<sup>Required</sup> <a name="watchlist_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId"></a>

```python
watchlist_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleWatchlistConfig <a name="ChronicleWatchlistConfig" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  entity_population_mechanism: ChronicleWatchlistEntityPopulationMechanism,
  instance: str,
  location: str,
  description: str = None,
  id: str = None,
  multiplying_factor: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ChronicleWatchlistTimeouts = None,
  watchlist_id: str = None,
  watchlist_user_preferences: ChronicleWatchlistWatchlistUserPreferences = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism">entity_population_mechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor">multiplying_factor</a></code> | <code>typing.Union[int, float]</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId">watchlist_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences">watchlist_user_preferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `entity_population_mechanism`<sup>Required</sup> <a name="entity_population_mechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```python
entity_population_mechanism: ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplying_factor`<sup>Optional</sup> <a name="multiplying_factor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor"></a>

```python
multiplying_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts"></a>

```python
timeouts: ChronicleWatchlistTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `watchlist_id`<sup>Optional</sup> <a name="watchlist_id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId"></a>

```python
watchlist_id: str
```

- *Type:* str

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `watchlist_user_preferences`<sup>Optional</sup> <a name="watchlist_user_preferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```python
watchlist_user_preferences: ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

### ChronicleWatchlistEntityCount <a name="ChronicleWatchlistEntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityCount()
```


### ChronicleWatchlistEntityPopulationMechanism <a name="ChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism(
  manual: ChronicleWatchlistEntityPopulationMechanismManual = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```python
manual: ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

### ChronicleWatchlistEntityPopulationMechanismManual <a name="ChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual()
```


### ChronicleWatchlistTimeouts <a name="ChronicleWatchlistTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

### ChronicleWatchlistWatchlistUserPreferences <a name="ChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences(
  pinned: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned">pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```python
pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleWatchlistEntityCountList <a name="ChronicleWatchlistEntityCountList" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityCountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleWatchlistEntityCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChronicleWatchlistEntityCountOutputReference <a name="ChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset">asset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user">user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```python
asset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user"></a>

```python
user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleWatchlistEntityCount
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a>

---


### ChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---


### ChronicleWatchlistEntityPopulationMechanismOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">put_manual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">reset_manual</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_manual` <a name="put_manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```python
def put_manual() -> None
```

##### `reset_manual` <a name="reset_manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```python
def reset_manual() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">manual_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```python
manual: ChronicleWatchlistEntityPopulationMechanismManualOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `manual_input`<sup>Optional</sup> <a name="manual_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```python
manual_input: ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---


### ChronicleWatchlistTimeoutsOutputReference <a name="ChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleWatchlistTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>]

---


### ChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="ChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_watchlist

chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">reset_pinned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pinned` <a name="reset_pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```python
def reset_pinned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">pinned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pinned_input`<sup>Optional</sup> <a name="pinned_input" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```python
pinned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```python
pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---



