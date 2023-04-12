# `dataGoogleSecretManagerSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerSecretVersionAccess` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecretVersionAccess <a name="DataGoogleSecretManagerSecretVersionAccess" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access google_secret_manager_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecretversionaccess"

datagooglesecretmanagersecretversionaccess.NewDataGoogleSecretManagerSecretVersionAccess(scope Construct, id *string, config DataGoogleSecretManagerSecretVersionAccessConfig) DataGoogleSecretManagerSecretVersionAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject"></a>

```go
func ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecretversionaccess"

datagooglesecretmanagersecretversionaccess.DataGoogleSecretManagerSecretVersionAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecretversionaccess"

datagooglesecretmanagersecretversionaccess.DataGoogleSecretManagerSecretVersionAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecretversionaccess"

datagooglesecretmanagersecretversionaccess.DataGoogleSecretManagerSecretVersionAccess_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData">SecretData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData"></a>

```go
func SecretData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretVersionAccessConfig <a name="DataGoogleSecretManagerSecretVersionAccessConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecretversionaccess"

&datagooglesecretmanagersecretversionaccess.DataGoogleSecretManagerSecretVersionAccessConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Secret: *string,
	Id: *string,
	Project: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}.

---



