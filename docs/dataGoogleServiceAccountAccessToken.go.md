# `dataGoogleServiceAccountAccessToken` Submodule <a name="`dataGoogleServiceAccountAccessToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountAccessToken <a name="DataGoogleServiceAccountAccessToken" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token google_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountaccesstoken"

datagoogleserviceaccountaccesstoken.NewDataGoogleServiceAccountAccessToken(scope Construct, id *string, config DataGoogleServiceAccountAccessTokenConfig) DataGoogleServiceAccountAccessToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig">DataGoogleServiceAccountAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig">DataGoogleServiceAccountAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetDelegates"></a>

```go
func ResetDelegates()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetId"></a>

```go
func ResetId()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetLifetime"></a>

```go
func ResetLifetime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountaccesstoken"

datagoogleserviceaccountaccesstoken.DataGoogleServiceAccountAccessToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountaccesstoken"

datagoogleserviceaccountaccesstoken.DataGoogleServiceAccountAccessToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountaccesstoken"

datagoogleserviceaccountaccesstoken.DataGoogleServiceAccountAccessToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegatesInput">DelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetimeInput">LifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegates">Delegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetime">Lifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegatesInput"></a>

```go
func DelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetimeInput"></a>

```go
func LifetimeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccountInput"></a>

```go
func TargetServiceAccountInput() *string
```

- *Type:* *string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegates"></a>

```go
func Delegates() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetime"></a>

```go
func Lifetime() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccount"></a>

```go
func TargetServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountAccessTokenConfig <a name="DataGoogleServiceAccountAccessTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountaccesstoken"

&datagoogleserviceaccountaccesstoken.DataGoogleServiceAccountAccessTokenConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scopes: *[]*string,
	TargetServiceAccount: *string,
	Delegates: *[]*string,
	Id: *string,
	Lifetime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#scopes DataGoogleServiceAccountAccessToken#scopes}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#target_service_account DataGoogleServiceAccountAccessToken#target_service_account}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.delegates">Delegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#delegates DataGoogleServiceAccountAccessToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#id DataGoogleServiceAccountAccessToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifetime">Lifetime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#lifetime DataGoogleServiceAccountAccessToken#lifetime}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#scopes DataGoogleServiceAccountAccessToken#scopes}.

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount"></a>

```go
TargetServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#target_service_account DataGoogleServiceAccountAccessToken#target_service_account}.

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.delegates"></a>

```go
Delegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#delegates DataGoogleServiceAccountAccessToken#delegates}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#id DataGoogleServiceAccountAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifetime"></a>

```go
Lifetime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#lifetime DataGoogleServiceAccountAccessToken#lifetime}.

---



