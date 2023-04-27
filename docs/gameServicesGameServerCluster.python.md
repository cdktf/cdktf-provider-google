# `google_game_services_game_server_cluster`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_cluster`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster).

# `gameServicesGameServerCluster` Submodule <a name="`gameServicesGameServerCluster` Submodule" id="@cdktf/provider-google.gameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerCluster <a name="GameServicesGameServerCluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  connection_info: GameServicesGameServerClusterConnectionInfo,
  realm_id: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GameServicesGameServerClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connectionInfo">connection_info</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.realmId">realm_id</a></code> | <code>str</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connectionInfo"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.realmId"></a>

- *Type:* str

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.description"></a>

- *Type:* str

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.location"></a>

- *Type:* str

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo">put_connection_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connection_info` <a name="put_connection_info" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo"></a>

```python
def put_connection_info(
  gke_cluster_reference: GameServicesGameServerClusterConnectionInfoGkeClusterReference,
  namespace: str
) -> None
```

###### `gke_cluster_reference`<sup>Required</sup> <a name="gke_cluster_reference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo.parameter.gkeClusterReference"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo.parameter.namespace"></a>

- *Type:* str

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo">connection_info</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput">connection_info_input</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput">realm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId">realm_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo"></a>

```python
connection_info: GameServicesGameServerClusterConnectionInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts"></a>

```python
timeouts: GameServicesGameServerClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `connection_info_input`<sup>Optional</sup> <a name="connection_info_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput"></a>

```python
connection_info_input: GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `realm_id_input`<sup>Optional</sup> <a name="realm_id_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput"></a>

```python
realm_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GameServicesGameServerClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId"></a>

```python
realm_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerClusterConfig <a name="GameServicesGameServerClusterConfig" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  connection_info: GameServicesGameServerClusterConnectionInfo,
  realm_id: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GameServicesGameServerClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo">connection_info</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId">realm_id</a></code> | <code>str</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description">description</a></code> | <code>str</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location">location</a></code> | <code>str</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo"></a>

```python
connection_info: GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `realm_id`<sup>Required</sup> <a name="realm_id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId"></a>

```python
realm_id: str
```

- *Type:* str

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts"></a>

```python
timeouts: GameServicesGameServerClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

### GameServicesGameServerClusterConnectionInfo <a name="GameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo(
  gke_cluster_reference: GameServicesGameServerClusterConnectionInfoGkeClusterReference,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">gke_cluster_reference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace">namespace</a></code> | <code>str</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `gke_cluster_reference`<sup>Required</sup> <a name="gke_cluster_reference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```python
gke_cluster_reference: GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}

---

### GameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference(
  cluster: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">cluster</a></code> | <code>str</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}

---

### GameServicesGameServerClusterTimeouts <a name="GameServicesGameServerClusterTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GameServicesGameServerClusterConnectionInfoOutputReference <a name="GameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference">put_gke_cluster_reference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_cluster_reference` <a name="put_gke_cluster_reference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```python
def put_gke_cluster_reference(
  cluster: str
) -> None
```

###### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.cluster"></a>

- *Type:* str

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">gke_cluster_reference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">gke_cluster_reference_input</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster_reference`<sup>Required</sup> <a name="gke_cluster_reference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```python
gke_cluster_reference: GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `gke_cluster_reference_input`<sup>Optional</sup> <a name="gke_cluster_reference_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```python
gke_cluster_reference_input: GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```python
internal_value: GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---


### GameServicesGameServerClusterTimeoutsOutputReference <a name="GameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_cluster

gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameServicesGameServerClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>, cdktf.IResolvable]

---



