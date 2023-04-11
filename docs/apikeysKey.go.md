# `apikeysKey` Submodule <a name="`apikeysKey` Submodule" id="@cdktf/provider-google.apikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApikeysKey <a name="ApikeysKey" id="@cdktf/provider-google.apikeysKey.ApikeysKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKey(scope Construct, id *string, config ApikeysKeyConfig) ApikeysKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions">ResetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions"></a>

```go
func PutRestrictions(value ApikeysKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts"></a>

```go
func PutTimeouts(value ApikeysKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions"></a>

```go
func ResetRestrictions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.ApikeysKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.ApikeysKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.ApikeysKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString">KeyString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyString`<sup>Required</sup> <a name="KeyString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString"></a>

```go
func KeyString() *string
```

- *Type:* *string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions"></a>

```go
func Restrictions() ApikeysKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts"></a>

```go
func Timeouts() ApikeysKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput"></a>

```go
func RestrictionsInput() ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApikeysKeyConfig <a name="ApikeysKeyConfig" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Restrictions: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyRestrictions,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#id ApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#name ApikeysKey#name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#display_name ApikeysKey#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#id ApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#project ApikeysKey#project}

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions"></a>

```go
Restrictions ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#restrictions ApikeysKey#restrictions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts"></a>

```go
Timeouts ApikeysKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#timeouts ApikeysKey#timeouts}

---

### ApikeysKeyRestrictions <a name="ApikeysKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictions {
	AndroidKeyRestrictions: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions,
	ApiTargets: interface{},
	BrowserKeyRestrictions: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions,
	IosKeyRestrictions: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions,
	ServerKeyRestrictions: github.com/cdktf/cdktf-provider-google-go/google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets">ApiTargets</a></code> | <code>interface{}</code> | api_targets block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `AndroidKeyRestrictions`<sup>Optional</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```go
AndroidKeyRestrictions ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#android_key_restrictions ApikeysKey#android_key_restrictions}

---

##### `ApiTargets`<sup>Optional</sup> <a name="ApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets"></a>

```go
ApiTargets interface{}
```

- *Type:* interface{}

api_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#api_targets ApikeysKey#api_targets}

---

##### `BrowserKeyRestrictions`<sup>Optional</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```go
BrowserKeyRestrictions ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#browser_key_restrictions ApikeysKey#browser_key_restrictions}

---

##### `IosKeyRestrictions`<sup>Optional</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```go
IosKeyRestrictions ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#ios_key_restrictions ApikeysKey#ios_key_restrictions}

---

##### `ServerKeyRestrictions`<sup>Optional</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```go
ServerKeyRestrictions ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#server_key_restrictions ApikeysKey#server_key_restrictions}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictions <a name="ApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsAndroidKeyRestrictions {
	AllowedApplications: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">AllowedApplications</a></code> | <code>interface{}</code> | allowed_applications block. |

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```go
AllowedApplications interface{}
```

- *Type:* interface{}

allowed_applications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#allowed_applications ApikeysKey#allowed_applications}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications {
	PackageName: *string,
	Sha1Fingerprint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">PackageName</a></code> | <code>*string</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | The SHA1 fingerprint of the application. |

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```go
PackageName *string
```

- *Type:* *string

The package name of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#package_name ApikeysKey#package_name}

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```go
Sha1Fingerprint *string
```

- *Type:* *string

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#sha1_fingerprint ApikeysKey#sha1_fingerprint}

---

### ApikeysKeyRestrictionsApiTargets <a name="ApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsApiTargets {
	Service: *string,
	Methods: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service">Service</a></code> | <code>*string</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods">Methods</a></code> | <code>*[]*string</code> | Optional. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#service ApikeysKey#service}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#methods ApikeysKey#methods}

---

### ApikeysKeyRestrictionsBrowserKeyRestrictions <a name="ApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsBrowserKeyRestrictions {
	AllowedReferrers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">AllowedReferrers</a></code> | <code>*[]*string</code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```go
AllowedReferrers *[]*string
```

- *Type:* *[]*string

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#allowed_referrers ApikeysKey#allowed_referrers}

---

### ApikeysKeyRestrictionsIosKeyRestrictions <a name="ApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsIosKeyRestrictions {
	AllowedBundleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>*[]*string</code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```go
AllowedBundleIds *[]*string
```

- *Type:* *[]*string

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#allowed_bundle_ids ApikeysKey#allowed_bundle_ids}

---

### ApikeysKeyRestrictionsServerKeyRestrictions <a name="ApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyRestrictionsServerKeyRestrictions {
	AllowedIps: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">AllowedIps</a></code> | <code>*[]*string</code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```go
AllowedIps *[]*string
```

- *Type:* *[]*string

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#allowed_ips ApikeysKey#allowed_ips}

---

### ApikeysKeyTimeouts <a name="ApikeysKeyTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

&apikeyskey.ApikeysKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#create ApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#delete ApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#update ApikeysKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#create ApikeysKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#delete ApikeysKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apikeys_key#update ApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```go
func Get(index *f64) ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">PackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">Sha1FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```go
func PackageNameInput() *string
```

- *Type:* *string

---

##### `Sha1FingerprintInput`<sup>Optional</sup> <a name="Sha1FingerprintInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```go
func Sha1FingerprintInput() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```go
func Sha1Fingerprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">PutAllowedApplications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedApplications` <a name="PutAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```go
func PutAllowedApplications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">AllowedApplications</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">AllowedApplicationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```go
func AllowedApplications() ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `AllowedApplicationsInput`<sup>Optional</sup> <a name="AllowedApplicationsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```go
func AllowedApplicationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### ApikeysKeyRestrictionsApiTargetsList <a name="ApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsApiTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApikeysKeyRestrictionsApiTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get"></a>

```go
func Get(index *f64) ApikeysKeyRestrictionsApiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApikeysKeyRestrictionsApiTargetsOutputReference <a name="ApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsApiTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApikeysKeyRestrictionsApiTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```go
func ResetMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">AllowedReferrersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">AllowedReferrers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedReferrersInput`<sup>Optional</sup> <a name="AllowedReferrersInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```go
func AllowedReferrersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```go
func AllowedReferrers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">AllowedBundleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedBundleIdsInput`<sup>Optional</sup> <a name="AllowedBundleIdsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```go
func AllowedBundleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```go
func AllowedBundleIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### ApikeysKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">PutAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets">PutApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">PutBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">PutIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">PutServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">ResetAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets">ResetApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">ResetBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">ResetIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">ResetServerKeyRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroidKeyRestrictions` <a name="PutAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```go
func PutAndroidKeyRestrictions(value ApikeysKeyRestrictionsAndroidKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `PutApiTargets` <a name="PutApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```go
func PutApiTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBrowserKeyRestrictions` <a name="PutBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```go
func PutBrowserKeyRestrictions(value ApikeysKeyRestrictionsBrowserKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `PutIosKeyRestrictions` <a name="PutIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```go
func PutIosKeyRestrictions(value ApikeysKeyRestrictionsIosKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `PutServerKeyRestrictions` <a name="PutServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```go
func PutServerKeyRestrictions(value ApikeysKeyRestrictionsServerKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `ResetAndroidKeyRestrictions` <a name="ResetAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```go
func ResetAndroidKeyRestrictions()
```

##### `ResetApiTargets` <a name="ResetApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```go
func ResetApiTargets()
```

##### `ResetBrowserKeyRestrictions` <a name="ResetBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```go
func ResetBrowserKeyRestrictions()
```

##### `ResetIosKeyRestrictions` <a name="ResetIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```go
func ResetIosKeyRestrictions()
```

##### `ResetServerKeyRestrictions` <a name="ResetServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```go
func ResetServerKeyRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets">ApiTargets</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">AndroidKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">ApiTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">BrowserKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">IosKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">ServerKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndroidKeyRestrictions`<sup>Required</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```go
func AndroidKeyRestrictions() ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `ApiTargets`<sup>Required</sup> <a name="ApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```go
func ApiTargets() ApikeysKeyRestrictionsApiTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a>

---

##### `BrowserKeyRestrictions`<sup>Required</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```go
func BrowserKeyRestrictions() ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `IosKeyRestrictions`<sup>Required</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```go
func IosKeyRestrictions() ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `ServerKeyRestrictions`<sup>Required</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```go
func ServerKeyRestrictions() ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `AndroidKeyRestrictionsInput`<sup>Optional</sup> <a name="AndroidKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```go
func AndroidKeyRestrictionsInput() ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `ApiTargetsInput`<sup>Optional</sup> <a name="ApiTargetsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```go
func ApiTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserKeyRestrictionsInput`<sup>Optional</sup> <a name="BrowserKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```go
func BrowserKeyRestrictionsInput() ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `IosKeyRestrictionsInput`<sup>Optional</sup> <a name="IosKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```go
func IosKeyRestrictionsInput() ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `ServerKeyRestrictionsInput`<sup>Optional</sup> <a name="ServerKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```go
func ServerKeyRestrictionsInput() ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---


### ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">AllowedIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">AllowedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIpsInput`<sup>Optional</sup> <a name="AllowedIpsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```go
func AllowedIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```go
func AllowedIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### ApikeysKeyTimeoutsOutputReference <a name="ApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apikeyskey"

apikeyskey.NewApikeysKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApikeysKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



