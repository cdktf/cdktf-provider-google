# `apigeeSyncAuthorization` Submodule <a name="`apigeeSyncAuthorization` Submodule" id="@cdktf/provider-google.apigeeSyncAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSyncAuthorization <a name="ApigeeSyncAuthorization" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization google_apigee_sync_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

apigeesyncauthorization.NewApigeeSyncAuthorization(scope Construct, id *string, config ApigeeSyncAuthorizationConfig) ApigeeSyncAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig">ApigeeSyncAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig">ApigeeSyncAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeSyncAuthorizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts">ApigeeSyncAuthorizationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

apigeesyncauthorization.ApigeeSyncAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

apigeesyncauthorization.ApigeeSyncAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

apigeesyncauthorization.ApigeeSyncAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference">ApigeeSyncAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.timeouts"></a>

```go
func Timeouts() ApigeeSyncAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference">ApigeeSyncAuthorizationTimeoutsOutputReference</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSyncAuthorizationConfig <a name="ApigeeSyncAuthorizationConfig" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

&apigeesyncauthorization.ApigeeSyncAuthorizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Identities: *[]*string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.identities">Identities</a></code> | <code>*[]*string</code> | Array of service accounts to grant access to control plane resources, each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#id ApigeeSyncAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts">ApigeeSyncAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

Array of service accounts to grant access to control plane resources, each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: my-synchronizer-manager-serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#identities ApigeeSyncAuthorization#identities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#name ApigeeSyncAuthorization#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#id ApigeeSyncAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationConfig.property.timeouts"></a>

```go
Timeouts ApigeeSyncAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts">ApigeeSyncAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#timeouts ApigeeSyncAuthorization#timeouts}

---

### ApigeeSyncAuthorizationTimeouts <a name="ApigeeSyncAuthorizationTimeouts" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

&apigeesyncauthorization.ApigeeSyncAuthorizationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#create ApigeeSyncAuthorization#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#delete ApigeeSyncAuthorization#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#update ApigeeSyncAuthorization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#create ApigeeSyncAuthorization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#delete ApigeeSyncAuthorization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_sync_authorization#update ApigeeSyncAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSyncAuthorizationTimeoutsOutputReference <a name="ApigeeSyncAuthorizationTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeesyncauthorization"

apigeesyncauthorization.NewApigeeSyncAuthorizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSyncAuthorizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSyncAuthorization.ApigeeSyncAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



