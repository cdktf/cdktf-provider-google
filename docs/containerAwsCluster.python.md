# `google_container_aws_cluster`

Refer to the Terraform Registory for docs: [`google_container_aws_cluster`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster).

# `containerAwsCluster` Submodule <a name="`containerAwsCluster` Submodule" id="@cdktf/provider-google.containerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsCluster <a name="ContainerAwsCluster" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: ContainerAwsClusterAuthorization,
  aws_region: str,
  control_plane: ContainerAwsClusterControlPlane,
  fleet: ContainerAwsClusterFleet,
  location: str,
  name: str,
  networking: ContainerAwsClusterNetworking,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContainerAwsClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#authorization ContainerAwsCluster#authorization}

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.awsRegion"></a>

- *Type:* str

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#fleet ContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#location ContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#name ContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#networking ContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#annotations ContainerAwsCluster#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#description ContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane">put_control_plane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_users: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
) -> None
```

###### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}

---

##### `put_control_plane` <a name="put_control_plane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane"></a>

```python
def put_control_plane(
  aws_services_authentication: ContainerAwsClusterControlPlaneAwsServicesAuthentication,
  config_encryption: ContainerAwsClusterControlPlaneConfigEncryption,
  database_encryption: ContainerAwsClusterControlPlaneDatabaseEncryption,
  iam_instance_profile: str,
  subnet_ids: typing.List[str],
  version: str,
  instance_type: str = None,
  main_volume: ContainerAwsClusterControlPlaneMainVolume = None,
  proxy_config: ContainerAwsClusterControlPlaneProxyConfig = None,
  root_volume: ContainerAwsClusterControlPlaneRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: ContainerAwsClusterControlPlaneSshConfig = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.awsServicesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}

---

###### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.configEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}

---

###### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.databaseEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}

---

###### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.iamInstanceProfile"></a>

- *Type:* str

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.version"></a>

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#version ContainerAwsCluster#version}

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.instanceType"></a>

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}

---

###### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.mainVolume"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}

---

###### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}

---

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}

---

###### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.sshConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#tags ContainerAwsCluster#tags}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet"></a>

```python
def put_fleet(
  project: str = None
) -> None
```

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet.parameter.project"></a>

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `put_networking` <a name="put_networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking"></a>

```python
def put_networking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  vpc_id: str,
  per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.podAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}

---

###### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.serviceAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.vpcId"></a>

- *Type:* str

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}

---

###### `per_node_pool_sg_rules_disabled`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.perNodePoolSgRulesDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#per_node_pool_sg_rules_disabled ContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig">workload_identity_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput">control_plane_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput">networking_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization"></a>

```python
authorization: ContainerAwsClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a>

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane"></a>

```python
control_plane: ContainerAwsClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet"></a>

```python
fleet: ContainerAwsClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking"></a>

```python
networking: ContainerAwsClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts"></a>

```python
timeouts: ContainerAwsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_identity_config`<sup>Required</sup> <a name="workload_identity_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig"></a>

```python
workload_identity_config: ContainerAwsClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput"></a>

```python
authorization_input: ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `control_plane_input`<sup>Optional</sup> <a name="control_plane_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput"></a>

```python
control_plane_input: ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput"></a>

```python
fleet_input: ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput"></a>

```python
networking_input: ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAwsClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsClusterAuthorization <a name="ContainerAwsClusterAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterAuthorization(
  admin_users: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers">admin_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | admin_users block. |

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers"></a>

```python
admin_users: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}

---

### ContainerAwsClusterAuthorizationAdminUsers <a name="ContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers(
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>str</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```python
username: str
```

- *Type:* str

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#username ContainerAwsCluster#username}

---

### ContainerAwsClusterConfig <a name="ContainerAwsClusterConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: ContainerAwsClusterAuthorization,
  aws_region: str,
  control_plane: ContainerAwsClusterControlPlane,
  fleet: ContainerAwsClusterFleet,
  location: str,
  name: str,
  networking: ContainerAwsClusterNetworking,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContainerAwsClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization"></a>

```python
authorization: ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#authorization ContainerAwsCluster#authorization}

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane"></a>

```python
control_plane: ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet"></a>

```python
fleet: ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#fleet ContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#location ContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#name ContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking"></a>

```python
networking: ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#networking ContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#annotations ContainerAwsCluster#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#description ContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts"></a>

```python
timeouts: ContainerAwsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}

---

### ContainerAwsClusterControlPlane <a name="ContainerAwsClusterControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlane(
  aws_services_authentication: ContainerAwsClusterControlPlaneAwsServicesAuthentication,
  config_encryption: ContainerAwsClusterControlPlaneConfigEncryption,
  database_encryption: ContainerAwsClusterControlPlaneDatabaseEncryption,
  iam_instance_profile: str,
  subnet_ids: typing.List[str],
  version: str,
  instance_type: str = None,
  main_volume: ContainerAwsClusterControlPlaneMainVolume = None,
  proxy_config: ContainerAwsClusterControlPlaneProxyConfig = None,
  root_volume: ContainerAwsClusterControlPlaneRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: ContainerAwsClusterControlPlaneSshConfig = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication">aws_services_authentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version">version</a></code> | <code>str</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType">instance_type</a></code> | <code>str</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```python
aws_services_authentication: ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption"></a>

```python
config_encryption: ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}

---

##### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```python
database_encryption: ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#version ContainerAwsCluster#version}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}

---

##### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume"></a>

```python
main_volume: ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig"></a>

```python
proxy_config: ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume"></a>

```python
root_volume: ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}

---

##### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig"></a>

```python
ssh_config: ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#tags ContainerAwsCluster#tags}

---

### ContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="ContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication(
  role_arn: str,
  role_session_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">role_session_name</a></code> | <code>str</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}

---

##### `role_session_name`<sup>Optional</sup> <a name="role_session_name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```python
role_session_name: str
```

- *Type:* str

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}

---

### ContainerAwsClusterControlPlaneConfigEncryption <a name="ContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneDatabaseEncryption <a name="ContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneMainVolume <a name="ContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType">volume_type</a></code> | <code>str</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneProxyConfig <a name="ContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig(
  secret_arn: str,
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">secret_version</a></code> | <code>str</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}

---

### ContainerAwsClusterControlPlaneRootVolume <a name="ContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType">volume_type</a></code> | <code>str</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneSshConfig <a name="ContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig(
  ec2_key_pair: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}

---

### ContainerAwsClusterFleet <a name="ContainerAwsClusterFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterFleet(
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project">project</a></code> | <code>str</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

### ContainerAwsClusterNetworking <a name="ContainerAwsClusterNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterNetworking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  vpc_id: str,
  per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId">vpc_id</a></code> | <code>str</code> | The VPC associated with the cluster. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled">per_node_pool_sg_rules_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the per node pool subnet security group rules on the control plane security group. |

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}

---

##### `per_node_pool_sg_rules_disabled`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled"></a>

```python
per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#per_node_pool_sg_rules_disabled ContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

### ContainerAwsClusterTimeouts <a name="ContainerAwsClusterTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}.

---

### ContainerAwsClusterWorkloadIdentityConfig <a name="ContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsClusterAuthorizationAdminUsersList <a name="ContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAwsClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]

---


### ContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="ContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAwsClusterAuthorizationAdminUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]

---


### ContainerAwsClusterAuthorizationOutputReference <a name="ContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers">put_admin_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_users` <a name="put_admin_users" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```python
def put_admin_users(
  value: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: ContainerAwsClusterAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.Union[IResolvable, typing.List[ContainerAwsClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---


### ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">reset_role_session_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_session_name` <a name="reset_role_session_name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```python
def reset_role_session_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">role_session_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">role_session_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_session_name_input`<sup>Optional</sup> <a name="role_session_name_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```python
role_session_name_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_session_name`<sup>Required</sup> <a name="role_session_name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```python
role_session_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### ContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---


### ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="ContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---


### ContainerAwsClusterControlPlaneOutputReference <a name="ContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">put_aws_services_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">put_config_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">put_database_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume">put_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig">put_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume">reset_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig">reset_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_services_authentication` <a name="put_aws_services_authentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```python
def put_aws_services_authentication(
  role_arn: str,
  role_session_name: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}

---

###### `role_session_name`<sup>Optional</sup> <a name="role_session_name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.roleSessionName"></a>

- *Type:* str

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}

---

##### `put_config_encryption` <a name="put_config_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```python
def put_config_encryption(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `put_database_encryption` <a name="put_database_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```python
def put_database_encryption(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `put_main_volume` <a name="put_main_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```python
def put_main_volume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.kmsKeyArn"></a>

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.volumeType"></a>

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```python
def put_proxy_config(
  secret_arn: str,
  secret_version: str
) -> None
```

###### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.secretArn"></a>

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}

---

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.secretVersion"></a>

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```python
def put_root_volume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.kmsKeyArn"></a>

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.volumeType"></a>

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

##### `put_ssh_config` <a name="put_ssh_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```python
def put_ssh_config(
  ec2_key_pair: str
) -> None
```

###### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.ec2KeyPair"></a>

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}

---

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_main_volume` <a name="reset_main_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```python
def reset_main_volume() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_ssh_config` <a name="reset_ssh_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```python
def reset_ssh_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">aws_services_authentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">aws_services_authentication_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">config_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">database_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">main_volume_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">ssh_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_services_authentication`<sup>Required</sup> <a name="aws_services_authentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```python
aws_services_authentication: ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```python
config_encryption: ContainerAwsClusterControlPlaneConfigEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```python
database_encryption: ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `main_volume`<sup>Required</sup> <a name="main_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```python
main_volume: ContainerAwsClusterControlPlaneMainVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```python
proxy_config: ContainerAwsClusterControlPlaneProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```python
root_volume: ContainerAwsClusterControlPlaneRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```python
ssh_config: ContainerAwsClusterControlPlaneSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `aws_services_authentication_input`<sup>Optional</sup> <a name="aws_services_authentication_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```python
aws_services_authentication_input: ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `config_encryption_input`<sup>Optional</sup> <a name="config_encryption_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```python
config_encryption_input: ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `database_encryption_input`<sup>Optional</sup> <a name="database_encryption_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```python
database_encryption_input: ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `main_volume_input`<sup>Optional</sup> <a name="main_volume_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```python
main_volume_input: ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```python
proxy_config_input: ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_config_input`<sup>Optional</sup> <a name="ssh_config_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```python
ssh_config_input: ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---


### ContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="ContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---


### ContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="ContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---


### ContainerAwsClusterControlPlaneSshConfigOutputReference <a name="ContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">ec2_key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_key_pair_input`<sup>Optional</sup> <a name="ec2_key_pair_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```python
ec2_key_pair_input: str
```

- *Type:* str

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---


### ContainerAwsClusterFleetOutputReference <a name="ContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---


### ContainerAwsClusterNetworkingOutputReference <a name="ContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled">reset_per_node_pool_sg_rules_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_per_node_pool_sg_rules_disabled` <a name="reset_per_node_pool_sg_rules_disabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled"></a>

```python
def reset_per_node_pool_sg_rules_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput">per_node_pool_sg_rules_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">pod_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">service_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled">per_node_pool_sg_rules_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_node_pool_sg_rules_disabled_input`<sup>Optional</sup> <a name="per_node_pool_sg_rules_disabled_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput"></a>

```python
per_node_pool_sg_rules_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_address_cidr_blocks_input`<sup>Optional</sup> <a name="pod_address_cidr_blocks_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```python
pod_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks_input`<sup>Optional</sup> <a name="service_address_cidr_blocks_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```python
service_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `per_node_pool_sg_rules_disabled`<sup>Required</sup> <a name="per_node_pool_sg_rules_disabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled"></a>

```python
per_node_pool_sg_rules_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---


### ContainerAwsClusterTimeoutsOutputReference <a name="ContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAwsClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>]

---


### ContainerAwsClusterWorkloadIdentityConfigList <a name="ContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAwsClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="ContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_cluster

containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workload_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `workload_pool`<sup>Required</sup> <a name="workload_pool" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```python
workload_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a>

---



