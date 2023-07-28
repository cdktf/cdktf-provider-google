# `google_game_services_realm`

Refer to the Terraform Registory for docs: [`google_game_services_realm`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm).

# `gameServicesRealm` Submodule <a name="`gameServicesRealm` Submodule" id="@cdktf/provider-google.gameServicesRealm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesRealm <a name="GameServicesRealm" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm google_game_services_realm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  realm_id: str,
  time_zone: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GameServicesRealmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.realmId">realm_id</a></code> | <code>str</code> | GCP region of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.description">description</a></code> | <code>str</code> | Human readable description of the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#id GameServicesRealm#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this realm. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#project GameServicesRealm#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.realmId"></a>

- *Type:* str

GCP region of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#realm_id GameServicesRealm#realm_id}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeZone"></a>

- *Type:* str

Required.

Time zone where all realm-specific policies are evaluated. The value of
this field must be from the IANA time zone database:
https://www.iana.org/time-zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#time_zone GameServicesRealm#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.description"></a>

- *Type:* str

Human readable description of the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#description GameServicesRealm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#id GameServicesRealm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this realm. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#labels GameServicesRealm#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.location"></a>

- *Type:* str

Location of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#location GameServicesRealm#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#project GameServicesRealm#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#timeouts GameServicesRealm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#create GameServicesRealm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#delete GameServicesRealm#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#update GameServicesRealm#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference">GameServicesRealmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmIdInput">realm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmId">realm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeouts"></a>

```python
timeouts: GameServicesRealmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference">GameServicesRealmTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `realm_id_input`<sup>Optional</sup> <a name="realm_id_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmIdInput"></a>

```python
realm_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GameServicesRealmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmId"></a>

```python
realm_id: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesRealmConfig <a name="GameServicesRealmConfig" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  realm_id: str,
  time_zone: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GameServicesRealmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.realmId">realm_id</a></code> | <code>str</code> | GCP region of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.description">description</a></code> | <code>str</code> | Human readable description of the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#id GameServicesRealm#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this realm. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.location">location</a></code> | <code>str</code> | Location of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#project GameServicesRealm#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.realmId"></a>

```python
realm_id: str
```

- *Type:* str

GCP region of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#realm_id GameServicesRealm#realm_id}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Required.

Time zone where all realm-specific policies are evaluated. The value of
this field must be from the IANA time zone database:
https://www.iana.org/time-zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#time_zone GameServicesRealm#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human readable description of the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#description GameServicesRealm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#id GameServicesRealm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this realm. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#labels GameServicesRealm#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#location GameServicesRealm#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#project GameServicesRealm#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeouts"></a>

```python
timeouts: GameServicesRealmTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#timeouts GameServicesRealm#timeouts}

---

### GameServicesRealmTimeouts <a name="GameServicesRealmTimeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealmTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#create GameServicesRealm#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#delete GameServicesRealm#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#update GameServicesRealm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#create GameServicesRealm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#delete GameServicesRealm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/game_services_realm#update GameServicesRealm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesRealmTimeoutsOutputReference <a name="GameServicesRealmTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_realm

gameServicesRealm.GameServicesRealmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GameServicesRealmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>]

---



