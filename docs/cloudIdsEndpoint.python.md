# `google_cloud_ids_endpoint`

Refer to the Terraform Registory for docs: [`google_cloud_ids_endpoint`](https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint).

# `cloudIdsEndpoint` Submodule <a name="`cloudIdsEndpoint` Submodule" id="@cdktf/provider-google.cloudIdsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdsEndpoint <a name="CloudIdsEndpoint" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint google_cloud_ids_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  severity: str,
  description: str = None,
  id: str = None,
  project: str = None,
  threat_exceptions: typing.List[str] = None,
  timeouts: CloudIdsEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.network">network</a></code> | <code>str</code> | Name of the VPC network that is connected to the IDS endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.severity">severity</a></code> | <code>str</code> | The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"]. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#id CloudIdsEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#project CloudIdsEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.threatExceptions">threat_exceptions</a></code> | <code>typing.List[str]</code> | Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.location"></a>

- *Type:* str

The location for the endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#location CloudIdsEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#name CloudIdsEndpoint#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.network"></a>

- *Type:* str

Name of the VPC network that is connected to the IDS endpoint.

This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#network CloudIdsEndpoint#network}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.severity"></a>

- *Type:* str

The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#severity CloudIdsEndpoint#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#description CloudIdsEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#id CloudIdsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#project CloudIdsEndpoint#project}.

---

##### `threat_exceptions`<sup>Optional</sup> <a name="threat_exceptions" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.threatExceptions"></a>

- *Type:* typing.List[str]

Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#threat_exceptions CloudIdsEndpoint#threat_exceptions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#timeouts CloudIdsEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetThreatExceptions">reset_threat_exceptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#create CloudIdsEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#delete CloudIdsEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#update CloudIdsEndpoint#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_threat_exceptions` <a name="reset_threat_exceptions" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetThreatExceptions"></a>

```python
def reset_threat_exceptions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.endpointForwardingRule">endpoint_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.endpointIp">endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference">CloudIdsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.threatExceptionsInput">threat_exceptions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.threatExceptions">threat_exceptions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_forwarding_rule`<sup>Required</sup> <a name="endpoint_forwarding_rule" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.endpointForwardingRule"></a>

```python
endpoint_forwarding_rule: str
```

- *Type:* str

---

##### `endpoint_ip`<sup>Required</sup> <a name="endpoint_ip" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.endpointIp"></a>

```python
endpoint_ip: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.timeouts"></a>

```python
timeouts: CloudIdsEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference">CloudIdsEndpointTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `threat_exceptions_input`<sup>Optional</sup> <a name="threat_exceptions_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.threatExceptionsInput"></a>

```python
threat_exceptions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudIdsEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `threat_exceptions`<sup>Required</sup> <a name="threat_exceptions" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.threatExceptions"></a>

```python
threat_exceptions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdsEndpointConfig <a name="CloudIdsEndpointConfig" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  severity: str,
  description: str = None,
  id: str = None,
  project: str = None,
  threat_exceptions: typing.List[str] = None,
  timeouts: CloudIdsEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.location">location</a></code> | <code>str</code> | The location for the endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.name">name</a></code> | <code>str</code> | Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.network">network</a></code> | <code>str</code> | Name of the VPC network that is connected to the IDS endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.severity">severity</a></code> | <code>str</code> | The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"]. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.description">description</a></code> | <code>str</code> | An optional description of the endpoint. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#id CloudIdsEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#project CloudIdsEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.threatExceptions">threat_exceptions</a></code> | <code>typing.List[str]</code> | Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#location CloudIdsEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#name CloudIdsEndpoint#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Name of the VPC network that is connected to the IDS endpoint.

This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#network CloudIdsEndpoint#network}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#severity CloudIdsEndpoint#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#description CloudIdsEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#id CloudIdsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#project CloudIdsEndpoint#project}.

---

##### `threat_exceptions`<sup>Optional</sup> <a name="threat_exceptions" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.threatExceptions"></a>

```python
threat_exceptions: typing.List[str]
```

- *Type:* typing.List[str]

Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#threat_exceptions CloudIdsEndpoint#threat_exceptions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointConfig.property.timeouts"></a>

```python
timeouts: CloudIdsEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#timeouts CloudIdsEndpoint#timeouts}

---

### CloudIdsEndpointTimeouts <a name="CloudIdsEndpointTimeouts" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#create CloudIdsEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#delete CloudIdsEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#update CloudIdsEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#create CloudIdsEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#delete CloudIdsEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_ids_endpoint#update CloudIdsEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdsEndpointTimeoutsOutputReference <a name="CloudIdsEndpointTimeoutsOutputReference" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_ids_endpoint

cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudIdsEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudIdsEndpoint.CloudIdsEndpointTimeouts">CloudIdsEndpointTimeouts</a>, cdktf.IResolvable]

---



