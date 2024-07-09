# `containerAzureCluster` Submodule <a name="`containerAzureCluster` Submodule" id="@cdktf/provider-google.containerAzureCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAzureCluster <a name="ContainerAzureCluster" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster google_container_azure_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: ContainerAzureClusterAuthorization,
  azure_region: str,
  control_plane: ContainerAzureClusterControlPlane,
  fleet: ContainerAzureClusterFleet,
  location: str,
  name: str,
  networking: ContainerAzureClusterNetworking,
  resource_group_id: str,
  annotations: typing.Mapping[str] = None,
  azure_services_authentication: ContainerAzureClusterAzureServicesAuthentication = None,
  client: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContainerAzureClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureRegion">azure_region</a></code> | <code>str</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureServicesAuthentication">azure_services_authentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.client">client</a></code> | <code>str</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#authorization ContainerAzureCluster#authorization}

---

##### `azure_region`<sup>Required</sup> <a name="azure_region" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureRegion"></a>

- *Type:* str

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#fleet ContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#location ContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#name ContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#networking ContainerAzureCluster#networking}

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#annotations ContainerAzureCluster#annotations}

---

##### `azure_services_authentication`<sup>Optional</sup> <a name="azure_services_authentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureServicesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#azure_services_authentication ContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.client"></a>

- *Type:* str

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#client ContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#description ContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication">put_azure_services_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane">put_control_plane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication">reset_azure_services_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient">reset_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_users: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]],
  admin_groups: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]] = None
) -> None
```

###### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#admin_users ContainerAzureCluster#admin_users}

---

###### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization.parameter.adminGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#admin_groups ContainerAzureCluster#admin_groups}

---

##### `put_azure_services_authentication` <a name="put_azure_services_authentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication"></a>

```python
def put_azure_services_authentication(
  application_id: str,
  tenant_id: str
) -> None
```

###### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication.parameter.applicationId"></a>

- *Type:* str

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#application_id ContainerAzureCluster#application_id}

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication.parameter.tenantId"></a>

- *Type:* str

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#tenant_id ContainerAzureCluster#tenant_id}

---

##### `put_control_plane` <a name="put_control_plane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane"></a>

```python
def put_control_plane(
  ssh_config: ContainerAzureClusterControlPlaneSshConfig,
  subnet_id: str,
  version: str,
  database_encryption: ContainerAzureClusterControlPlaneDatabaseEncryption = None,
  main_volume: ContainerAzureClusterControlPlaneMainVolume = None,
  proxy_config: ContainerAzureClusterControlPlaneProxyConfig = None,
  replica_placements: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]] = None,
  root_volume: ContainerAzureClusterControlPlaneRootVolume = None,
  tags: typing.Mapping[str] = None,
  vm_size: str = None
) -> None
```

###### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.sshConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#ssh_config ContainerAzureCluster#ssh_config}

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.subnetId"></a>

- *Type:* str

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.version"></a>

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#version ContainerAzureCluster#version}

---

###### `database_encryption`<sup>Optional</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.databaseEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#database_encryption ContainerAzureCluster#database_encryption}

---

###### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.mainVolume"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#main_volume ContainerAzureCluster#main_volume}

---

###### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#proxy_config ContainerAzureCluster#proxy_config}

---

###### `replica_placements`<sup>Optional</sup> <a name="replica_placements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.replicaPlacements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#replica_placements ContainerAzureCluster#replica_placements}

---

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#root_volume ContainerAzureCluster#root_volume}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#tags ContainerAzureCluster#tags}

---

###### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.vmSize"></a>

- *Type:* str

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#vm_size ContainerAzureCluster#vm_size}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet"></a>

```python
def put_fleet(
  project: str = None
) -> None
```

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet.parameter.project"></a>

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `put_networking` <a name="put_networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking"></a>

```python
def put_networking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  virtual_network_id: str
) -> None
```

###### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking.parameter.podAddressCidrBlocks"></a>

- *Type:* typing.List[str]

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#pod_address_cidr_blocks ContainerAzureCluster#pod_address_cidr_blocks}

---

###### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking.parameter.serviceAddressCidrBlocks"></a>

- *Type:* typing.List[str]

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#service_address_cidr_blocks ContainerAzureCluster#service_address_cidr_blocks}

---

###### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking.parameter.virtualNetworkId"></a>

- *Type:* str

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#virtual_network_id ContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_azure_services_authentication` <a name="reset_azure_services_authentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication"></a>

```python
def reset_azure_services_authentication() -> None
```

##### `reset_client` <a name="reset_client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient"></a>

```python
def reset_client() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAzureCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAzureCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAzureCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication">azure_services_authentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig">workload_identity_config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput">azure_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput">azure_services_authentication_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput">client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput">control_plane_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput">networking_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion">azure_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client">client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization"></a>

```python
authorization: ContainerAzureClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a>

---

##### `azure_services_authentication`<sup>Required</sup> <a name="azure_services_authentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication"></a>

```python
azure_services_authentication: ContainerAzureClusterAzureServicesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a>

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane"></a>

```python
control_plane: ContainerAzureClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet"></a>

```python
fleet: ContainerAzureClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking"></a>

```python
networking: ContainerAzureClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts"></a>

```python
timeouts: ContainerAzureClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_identity_config`<sup>Required</sup> <a name="workload_identity_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig"></a>

```python
workload_identity_config: ContainerAzureClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput"></a>

```python
authorization_input: ContainerAzureClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---

##### `azure_region_input`<sup>Optional</sup> <a name="azure_region_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput"></a>

```python
azure_region_input: str
```

- *Type:* str

---

##### `azure_services_authentication_input`<sup>Optional</sup> <a name="azure_services_authentication_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput"></a>

```python
azure_services_authentication_input: ContainerAzureClusterAzureServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---

##### `client_input`<sup>Optional</sup> <a name="client_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput"></a>

```python
client_input: str
```

- *Type:* str

---

##### `control_plane_input`<sup>Optional</sup> <a name="control_plane_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput"></a>

```python
control_plane_input: ContainerAzureClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput"></a>

```python
fleet_input: ContainerAzureClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput"></a>

```python
networking_input: ContainerAzureClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAzureClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `azure_region`<sup>Required</sup> <a name="azure_region" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion"></a>

```python
azure_region: str
```

- *Type:* str

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client"></a>

```python
client: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAzureClusterAuthorization <a name="ContainerAzureClusterAuthorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorization(
  admin_users: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]],
  admin_groups: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers">admin_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups">admin_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]</code> | admin_groups block. |

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers"></a>

```python
admin_users: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#admin_users ContainerAzureCluster#admin_users}

---

##### `admin_groups`<sup>Optional</sup> <a name="admin_groups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups"></a>

```python
admin_groups: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#admin_groups ContainerAzureCluster#admin_groups}

---

### ContainerAzureClusterAuthorizationAdminGroups <a name="ContainerAzureClusterAuthorizationAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups(
  group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>str</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#group ContainerAzureCluster#group}

---

### ContainerAzureClusterAuthorizationAdminUsers <a name="ContainerAzureClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers(
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>str</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username"></a>

```python
username: str
```

- *Type:* str

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#username ContainerAzureCluster#username}

---

### ContainerAzureClusterAzureServicesAuthentication <a name="ContainerAzureClusterAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication(
  application_id: str,
  tenant_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId">application_id</a></code> | <code>str</code> | The Azure Active Directory Application ID for Authentication configuration. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId">tenant_id</a></code> | <code>str</code> | The Azure Active Directory Tenant ID for Authentication configuration. |

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#application_id ContainerAzureCluster#application_id}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#tenant_id ContainerAzureCluster#tenant_id}

---

### ContainerAzureClusterConfig <a name="ContainerAzureClusterConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: ContainerAzureClusterAuthorization,
  azure_region: str,
  control_plane: ContainerAzureClusterControlPlane,
  fleet: ContainerAzureClusterFleet,
  location: str,
  name: str,
  networking: ContainerAzureClusterNetworking,
  resource_group_id: str,
  annotations: typing.Mapping[str] = None,
  azure_services_authentication: ContainerAzureClusterAzureServicesAuthentication = None,
  client: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContainerAzureClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion">azure_region</a></code> | <code>str</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication">azure_services_authentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client">client</a></code> | <code>str</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description">description</a></code> | <code>str</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization"></a>

```python
authorization: ContainerAzureClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#authorization ContainerAzureCluster#authorization}

---

##### `azure_region`<sup>Required</sup> <a name="azure_region" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion"></a>

```python
azure_region: str
```

- *Type:* str

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane"></a>

```python
control_plane: ContainerAzureClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet"></a>

```python
fleet: ContainerAzureClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#fleet ContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#location ContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#name ContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking"></a>

```python
networking: ContainerAzureClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#networking ContainerAzureCluster#networking}

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#annotations ContainerAzureCluster#annotations}

---

##### `azure_services_authentication`<sup>Optional</sup> <a name="azure_services_authentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication"></a>

```python
azure_services_authentication: ContainerAzureClusterAzureServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#azure_services_authentication ContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client"></a>

```python
client: str
```

- *Type:* str

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#client ContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#description ContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts"></a>

```python
timeouts: ContainerAzureClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}

---

### ContainerAzureClusterControlPlane <a name="ContainerAzureClusterControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlane(
  ssh_config: ContainerAzureClusterControlPlaneSshConfig,
  subnet_id: str,
  version: str,
  database_encryption: ContainerAzureClusterControlPlaneDatabaseEncryption = None,
  main_volume: ContainerAzureClusterControlPlaneMainVolume = None,
  proxy_config: ContainerAzureClusterControlPlaneProxyConfig = None,
  replica_placements: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]] = None,
  root_volume: ContainerAzureClusterControlPlaneRootVolume = None,
  tags: typing.Mapping[str] = None,
  vm_size: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId">subnet_id</a></code> | <code>str</code> | The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version">version</a></code> | <code>str</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements">replica_placements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]</code> | replica_placements block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Optional. A set of tags to apply to all underlying control plane Azure resources. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize">vm_size</a></code> | <code>str</code> | Optional. |

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig"></a>

```python
ssh_config: ContainerAzureClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#ssh_config ContainerAzureCluster#ssh_config}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#version ContainerAzureCluster#version}

---

##### `database_encryption`<sup>Optional</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption"></a>

```python
database_encryption: ContainerAzureClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#database_encryption ContainerAzureCluster#database_encryption}

---

##### `main_volume`<sup>Optional</sup> <a name="main_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume"></a>

```python
main_volume: ContainerAzureClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#main_volume ContainerAzureCluster#main_volume}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig"></a>

```python
proxy_config: ContainerAzureClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#proxy_config ContainerAzureCluster#proxy_config}

---

##### `replica_placements`<sup>Optional</sup> <a name="replica_placements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements"></a>

```python
replica_placements: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#replica_placements ContainerAzureCluster#replica_placements}

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume"></a>

```python
root_volume: ContainerAzureClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#root_volume ContainerAzureCluster#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#tags ContainerAzureCluster#tags}

---

##### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#vm_size ContainerAzureCluster#vm_size}

---

### ContainerAzureClusterControlPlaneDatabaseEncryption <a name="ContainerAzureClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption(
  key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId">key_id</a></code> | <code>str</code> | The ARM ID of the Azure Key Vault key to encrypt / decrypt data. |

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#key_id ContainerAzureCluster#key_id}

---

### ContainerAzureClusterControlPlaneMainVolume <a name="ContainerAzureClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume(
  size_gib: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneProxyConfig <a name="ContainerAzureClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig(
  resource_group_id: str,
  secret_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId">secret_id</a></code> | <code>str</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#secret_id ContainerAzureCluster#secret_id}

---

### ContainerAzureClusterControlPlaneReplicaPlacements <a name="ContainerAzureClusterControlPlaneReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements(
  azure_availability_zone: str,
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone">azure_availability_zone</a></code> | <code>str</code> | For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId">subnet_id</a></code> | <code>str</code> | For a given replica, the ARM ID of the subnet where the control plane VM is deployed. |

---

##### `azure_availability_zone`<sup>Required</sup> <a name="azure_availability_zone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone"></a>

```python
azure_availability_zone: str
```

- *Type:* str

For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#azure_availability_zone ContainerAzureCluster#azure_availability_zone}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

For a given replica, the ARM ID of the subnet where the control plane VM is deployed.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

### ContainerAzureClusterControlPlaneRootVolume <a name="ContainerAzureClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume(
  size_gib: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneSshConfig <a name="ContainerAzureClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig(
  authorized_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey">authorized_key</a></code> | <code>str</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey"></a>

```python
authorized_key: str
```

- *Type:* str

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#authorized_key ContainerAzureCluster#authorized_key}

---

### ContainerAzureClusterFleet <a name="ContainerAzureClusterFleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterFleet(
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project">project</a></code> | <code>str</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

### ContainerAzureClusterNetworking <a name="ContainerAzureClusterNetworking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterNetworking(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  virtual_network_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. |

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#pod_address_cidr_blocks ContainerAzureCluster#pod_address_cidr_blocks}

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#service_address_cidr_blocks ContainerAzureCluster#service_address_cidr_blocks}

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#virtual_network_id ContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ContainerAzureClusterTimeouts <a name="ContainerAzureClusterTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}.

---

### ContainerAzureClusterWorkloadIdentityConfig <a name="ContainerAzureClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAzureClusterAuthorizationAdminGroupsList <a name="ContainerAzureClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAzureClusterAuthorizationAdminGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]

---


### ContainerAzureClusterAuthorizationAdminGroupsOutputReference <a name="ContainerAzureClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAzureClusterAuthorizationAdminGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]

---


### ContainerAzureClusterAuthorizationAdminUsersList <a name="ContainerAzureClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAzureClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]

---


### ContainerAzureClusterAuthorizationAdminUsersOutputReference <a name="ContainerAzureClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAzureClusterAuthorizationAdminUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]

---


### ContainerAzureClusterAuthorizationOutputReference <a name="ContainerAzureClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups">put_admin_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers">put_admin_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups">reset_admin_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_groups` <a name="put_admin_groups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups"></a>

```python
def put_admin_groups(
  value: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]

---

##### `put_admin_users` <a name="put_admin_users" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers"></a>

```python
def put_admin_users(
  value: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]

---

##### `reset_admin_groups` <a name="reset_admin_groups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups"></a>

```python
def reset_admin_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups">admin_groups</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput">admin_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_groups`<sup>Required</sup> <a name="admin_groups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups"></a>

```python
admin_groups: ContainerAzureClusterAuthorizationAdminGroupsList
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a>

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: ContainerAzureClusterAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a>

---

##### `admin_groups_input`<sup>Optional</sup> <a name="admin_groups_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```python
admin_groups_input: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>]]

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.Union[IResolvable, typing.List[ContainerAzureClusterAuthorizationAdminUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---


### ContainerAzureClusterAzureServicesAuthenticationOutputReference <a name="ContainerAzureClusterAzureServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterAzureServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---


### ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAzureClusterControlPlaneMainVolumeOutputReference <a name="ContainerAzureClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---


### ContainerAzureClusterControlPlaneOutputReference <a name="ContainerAzureClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption">put_database_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume">put_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements">put_replica_placements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig">put_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption">reset_database_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume">reset_main_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements">reset_replica_placements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize">reset_vm_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_encryption` <a name="put_database_encryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```python
def put_database_encryption(
  key_id: str
) -> None
```

###### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.keyId"></a>

- *Type:* str

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#key_id ContainerAzureCluster#key_id}

---

##### `put_main_volume` <a name="put_main_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume"></a>

```python
def put_main_volume(
  size_gib: typing.Union[int, float] = None
) -> None
```

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig"></a>

```python
def put_proxy_config(
  resource_group_id: str,
  secret_id: str
) -> None
```

###### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.resourceGroupId"></a>

- *Type:* str

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

---

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.secretId"></a>

- *Type:* str

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#secret_id ContainerAzureCluster#secret_id}

---

##### `put_replica_placements` <a name="put_replica_placements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements"></a>

```python
def put_replica_placements(
  value: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume"></a>

```python
def put_root_volume(
  size_gib: typing.Union[int, float] = None
) -> None
```

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

##### `put_ssh_config` <a name="put_ssh_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig"></a>

```python
def put_ssh_config(
  authorized_key: str
) -> None
```

###### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig.parameter.authorizedKey"></a>

- *Type:* str

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/container_azure_cluster#authorized_key ContainerAzureCluster#authorized_key}

---

##### `reset_database_encryption` <a name="reset_database_encryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption"></a>

```python
def reset_database_encryption() -> None
```

##### `reset_main_volume` <a name="reset_main_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume"></a>

```python
def reset_main_volume() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_replica_placements` <a name="reset_replica_placements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements"></a>

```python
def reset_replica_placements() -> None
```

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vm_size` <a name="reset_vm_size" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize"></a>

```python
def reset_vm_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption">database_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume">main_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements">replica_placements</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput">database_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput">main_volume_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput">replica_placements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput">ssh_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_encryption`<sup>Required</sup> <a name="database_encryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```python
database_encryption: ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `main_volume`<sup>Required</sup> <a name="main_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume"></a>

```python
main_volume: ContainerAzureClusterControlPlaneMainVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig"></a>

```python
proxy_config: ContainerAzureClusterControlPlaneProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a>

---

##### `replica_placements`<sup>Required</sup> <a name="replica_placements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements"></a>

```python
replica_placements: ContainerAzureClusterControlPlaneReplicaPlacementsList
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume"></a>

```python
root_volume: ContainerAzureClusterControlPlaneRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a>

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig"></a>

```python
ssh_config: ContainerAzureClusterControlPlaneSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a>

---

##### `database_encryption_input`<sup>Optional</sup> <a name="database_encryption_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```python
database_encryption_input: ContainerAzureClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `main_volume_input`<sup>Optional</sup> <a name="main_volume_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```python
main_volume_input: ContainerAzureClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```python
proxy_config_input: ContainerAzureClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `replica_placements_input`<sup>Optional</sup> <a name="replica_placements_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput"></a>

```python
replica_placements_input: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: ContainerAzureClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---

##### `ssh_config_input`<sup>Optional</sup> <a name="ssh_config_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```python
ssh_config_input: ContainerAzureClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---


### ContainerAzureClusterControlPlaneProxyConfigOutputReference <a name="ContainerAzureClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---


### ContainerAzureClusterControlPlaneReplicaPlacementsList <a name="ContainerAzureClusterControlPlaneReplicaPlacementsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAzureClusterControlPlaneReplicaPlacements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]]

---


### ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference <a name="ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput">azure_availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone">azure_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_availability_zone_input`<sup>Optional</sup> <a name="azure_availability_zone_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput"></a>

```python
azure_availability_zone_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `azure_availability_zone`<sup>Required</sup> <a name="azure_availability_zone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone"></a>

```python
azure_availability_zone: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAzureClusterControlPlaneReplicaPlacements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>]

---


### ContainerAzureClusterControlPlaneRootVolumeOutputReference <a name="ContainerAzureClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---


### ContainerAzureClusterControlPlaneSshConfigOutputReference <a name="ContainerAzureClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput">authorized_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey">authorized_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_key_input`<sup>Optional</sup> <a name="authorized_key_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput"></a>

```python
authorized_key_input: str
```

- *Type:* str

---

##### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey"></a>

```python
authorized_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---


### ContainerAzureClusterFleetOutputReference <a name="ContainerAzureClusterFleetOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---


### ContainerAzureClusterNetworkingOutputReference <a name="ContainerAzureClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">pod_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">service_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pod_address_cidr_blocks_input`<sup>Optional</sup> <a name="pod_address_cidr_blocks_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```python
pod_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks_input`<sup>Optional</sup> <a name="service_address_cidr_blocks_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```python
service_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---


### ContainerAzureClusterTimeoutsOutputReference <a name="ContainerAzureClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAzureClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>]

---


### ContainerAzureClusterWorkloadIdentityConfigList <a name="ContainerAzureClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAzureClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerAzureClusterWorkloadIdentityConfigOutputReference <a name="ContainerAzureClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_azure_cluster

containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workload_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `workload_pool`<sup>Required</sup> <a name="workload_pool" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```python
workload_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAzureClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a>

---



