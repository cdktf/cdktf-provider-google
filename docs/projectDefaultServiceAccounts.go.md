# `projectDefaultServiceAccounts` Submodule <a name="`projectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google.projectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectDefaultServiceAccounts <a name="ProjectDefaultServiceAccounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

projectdefaultserviceaccounts.NewProjectDefaultServiceAccounts(scope Construct, id *string, config ProjectDefaultServiceAccountsConfig) ProjectDefaultServiceAccounts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig">ProjectDefaultServiceAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig">ProjectDefaultServiceAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts"></a>

```go
func PutTimeouts(value ProjectDefaultServiceAccountsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId"></a>

```go
func ResetId()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

projectdefaultserviceaccounts.ProjectDefaultServiceAccounts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

projectdefaultserviceaccounts.ProjectDefaultServiceAccounts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

projectdefaultserviceaccounts.ProjectDefaultServiceAccounts_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts">ServiceAccounts</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput">RestorePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy">RestorePolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceAccounts`<sup>Required</sup> <a name="ServiceAccounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```go
func ServiceAccounts() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts"></a>

```go
func Timeouts() ProjectDefaultServiceAccountsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy"></a>

```go
func RestorePolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectDefaultServiceAccountsConfig <a name="ProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

&projectdefaultserviceaccounts.ProjectDefaultServiceAccountsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Project: *string,
	Id: *string,
	RestorePolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action">Action</a></code> | <code>*string</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project">Project</a></code> | <code>*string</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy">RestorePolicy</a></code> | <code>*string</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#action ProjectDefaultServiceAccounts#action}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#project ProjectDefaultServiceAccounts#project}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```go
RestorePolicy *string
```

- *Type:* *string

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#restore_policy ProjectDefaultServiceAccounts#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```go
Timeouts ProjectDefaultServiceAccountsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#timeouts ProjectDefaultServiceAccounts#timeouts}

---

### ProjectDefaultServiceAccountsTimeouts <a name="ProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

&projectdefaultserviceaccounts.ProjectDefaultServiceAccountsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultServiceAccountsTimeoutsOutputReference <a name="ProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectdefaultserviceaccounts"

projectdefaultserviceaccounts.NewProjectDefaultServiceAccountsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectDefaultServiceAccountsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



