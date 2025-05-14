# `firebaseAppHostingBackend` Submodule <a name="`firebaseAppHostingBackend` Submodule" id="@cdktf/provider-google.firebaseAppHostingBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBackend <a name="FirebaseAppHostingBackend" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend google_firebase_app_hosting_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  backend_id: str,
  location: str,
  service_account: str,
  serving_locality: str,
  annotations: typing.Mapping[str] = None,
  codebase: FirebaseAppHostingBackendCodebase = None,
  display_name: str = None,
  environment: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseAppHostingBackendTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.backendId">backend_id</a></code> | <code>str</code> | Id of the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.location">location</a></code> | <code>str</code> | The canonical IDs of a Google Cloud location such as "us-east1". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.servingLocality">serving_locality</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The environment name of the backend, used to load environment variables from environment specific configuration. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.appId"></a>

- *Type:* str

The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#app_id FirebaseAppHostingBackend#app_id}

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.backendId"></a>

- *Type:* str

Id of the backend.

Also used as the service ID for Cloud Run, and as part
of the default domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#backend_id FirebaseAppHostingBackend#backend_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.location"></a>

- *Type:* str

The canonical IDs of a Google Cloud location such as "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#location FirebaseAppHostingBackend#location}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#service_account FirebaseAppHostingBackend#service_account}

---

##### `serving_locality`<sup>Required</sup> <a name="serving_locality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.servingLocality"></a>

- *Type:* str

Immutable.

Specifies how App Hosting will serve the content for this backend. It will
either be contained to a single region (REGIONAL_STRICT) or allowed to use
App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS). Possible values: ["REGIONAL_STRICT", "GLOBAL_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#serving_locality FirebaseAppHostingBackend#serving_locality}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#annotations FirebaseAppHostingBackend#annotations}

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.codebase"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#codebase FirebaseAppHostingBackend#codebase}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#display_name FirebaseAppHostingBackend#display_name}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.environment"></a>

- *Type:* str

The environment name of the backend, used to load environment variables from environment specific configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#environment FirebaseAppHostingBackend#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#labels FirebaseAppHostingBackend#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#timeouts FirebaseAppHostingBackend#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase">put_codebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase">reset_codebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_codebase` <a name="put_codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase"></a>

```python
def put_codebase(
  repository: str,
  root_directory: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase.parameter.repository"></a>

- *Type:* str

The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:.

projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#repository FirebaseAppHostingBackend#repository}

---

###### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase.parameter.rootDirectory"></a>

- *Type:* str

If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#root_directory FirebaseAppHostingBackend#root_directory}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_codebase` <a name="reset_codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase"></a>

```python
def reset_codebase() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppHostingBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppHostingBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources">managed_resources</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput">backend_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput">codebase_input</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput">serving_locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId">backend_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality">serving_locality</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `codebase`<sup>Required</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase"></a>

```python
codebase: FirebaseAppHostingBackendCodebaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `managed_resources`<sup>Required</sup> <a name="managed_resources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources"></a>

```python
managed_resources: FirebaseAppHostingBackendManagedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingBackendTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `backend_id_input`<sup>Optional</sup> <a name="backend_id_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput"></a>

```python
backend_id_input: str
```

- *Type:* str

---

##### `codebase_input`<sup>Optional</sup> <a name="codebase_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput"></a>

```python
codebase_input: FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `serving_locality_input`<sup>Optional</sup> <a name="serving_locality_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput"></a>

```python
serving_locality_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaseAppHostingBackendTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId"></a>

```python
backend_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `serving_locality`<sup>Required</sup> <a name="serving_locality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality"></a>

```python
serving_locality: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBackendCodebase <a name="FirebaseAppHostingBackendCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase(
  repository: str,
  root_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository">repository</a></code> | <code>str</code> | The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory">root_directory</a></code> | <code>str</code> | If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository"></a>

```python
repository: str
```

- *Type:* str

The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:.

projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#repository FirebaseAppHostingBackend#repository}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#root_directory FirebaseAppHostingBackend#root_directory}

---

### FirebaseAppHostingBackendConfig <a name="FirebaseAppHostingBackendConfig" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  backend_id: str,
  location: str,
  service_account: str,
  serving_locality: str,
  annotations: typing.Mapping[str] = None,
  codebase: FirebaseAppHostingBackendCodebase = None,
  display_name: str = None,
  environment: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: FirebaseAppHostingBackendTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId">app_id</a></code> | <code>str</code> | The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId">backend_id</a></code> | <code>str</code> | Id of the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location">location</a></code> | <code>str</code> | The canonical IDs of a Google Cloud location such as "us-east1". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality">serving_locality</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment">environment</a></code> | <code>str</code> | The environment name of the backend, used to load environment variables from environment specific configuration. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#app_id FirebaseAppHostingBackend#app_id}

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId"></a>

```python
backend_id: str
```

- *Type:* str

Id of the backend.

Also used as the service ID for Cloud Run, and as part
of the default domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#backend_id FirebaseAppHostingBackend#backend_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The canonical IDs of a Google Cloud location such as "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#location FirebaseAppHostingBackend#location}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#service_account FirebaseAppHostingBackend#service_account}

---

##### `serving_locality`<sup>Required</sup> <a name="serving_locality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality"></a>

```python
serving_locality: str
```

- *Type:* str

Immutable.

Specifies how App Hosting will serve the content for this backend. It will
either be contained to a single region (REGIONAL_STRICT) or allowed to use
App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS). Possible values: ["REGIONAL_STRICT", "GLOBAL_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#serving_locality FirebaseAppHostingBackend#serving_locality}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#annotations FirebaseAppHostingBackend#annotations}

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase"></a>

```python
codebase: FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#codebase FirebaseAppHostingBackend#codebase}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#display_name FirebaseAppHostingBackend#display_name}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment name of the backend, used to load environment variables from environment specific configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#environment FirebaseAppHostingBackend#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#labels FirebaseAppHostingBackend#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingBackendTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#timeouts FirebaseAppHostingBackend#timeouts}

---

### FirebaseAppHostingBackendManagedResources <a name="FirebaseAppHostingBackendManagedResources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources()
```


### FirebaseAppHostingBackendManagedResourcesRunService <a name="FirebaseAppHostingBackendManagedResourcesRunService" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService()
```


### FirebaseAppHostingBackendTimeouts <a name="FirebaseAppHostingBackendTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBackendCodebaseOutputReference <a name="FirebaseAppHostingBackendCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory">reset_root_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---


### FirebaseAppHostingBackendManagedResourcesList <a name="FirebaseAppHostingBackendManagedResourcesList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseAppHostingBackendManagedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseAppHostingBackendManagedResourcesOutputReference <a name="FirebaseAppHostingBackendManagedResourcesOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService">run_service</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `run_service`<sup>Required</sup> <a name="run_service" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService"></a>

```python
run_service: FirebaseAppHostingBackendManagedResourcesRunServiceList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBackendManagedResources
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a>

---


### FirebaseAppHostingBackendManagedResourcesRunServiceList <a name="FirebaseAppHostingBackendManagedResourcesRunServiceList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference <a name="FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseAppHostingBackendManagedResourcesRunService
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a>

---


### FirebaseAppHostingBackendTimeoutsOutputReference <a name="FirebaseAppHostingBackendTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_backend

firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaseAppHostingBackendTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>]

---



