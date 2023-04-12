# `resourceManagerLien` Submodule <a name="`resourceManagerLien` Submodule" id="@cdktf/provider-google.resourceManagerLien"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerLien <a name="ResourceManagerLien" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien google_resource_manager_lien}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

resourcemanagerlien.NewResourceManagerLien(scope Construct, id *string, config ResourceManagerLienConfig) ResourceManagerLien
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig">ResourceManagerLienConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig">ResourceManagerLienConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts"></a>

```go
func PutTimeouts(value ResourceManagerLienTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

resourcemanagerlien.ResourceManagerLien_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

resourcemanagerlien.ResourceManagerLien_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

resourcemanagerlien.ResourceManagerLien_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference">ResourceManagerLienTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reasonInput">ReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictionsInput">RestrictionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictions">Restrictions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeouts"></a>

```go
func Timeouts() ResourceManagerLienTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference">ResourceManagerLienTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reasonInput"></a>

```go
func ReasonInput() *string
```

- *Type:* *string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictionsInput"></a>

```go
func RestrictionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictions"></a>

```go
func Restrictions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerLienConfig <a name="ResourceManagerLienConfig" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

&resourcemanagerlien.ResourceManagerLienConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Origin: *string,
	Parent: *string,
	Reason: *string,
	Restrictions: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.resourceManagerLien.ResourceManagerLienTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.origin">Origin</a></code> | <code>*string</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.parent">Parent</a></code> | <code>*string</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.reason">Reason</a></code> | <code>*string</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.restrictions">Restrictions</a></code> | <code>*[]*string</code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#id ResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#origin ResourceManagerLien#origin}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#parent ResourceManagerLien#parent}

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.reason"></a>

```go
Reason *string
```

- *Type:* *string

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#reason ResourceManagerLien#reason}

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.restrictions"></a>

```go
Restrictions *[]*string
```

- *Type:* *[]*string

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#restrictions ResourceManagerLien#restrictions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#id ResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.timeouts"></a>

```go
Timeouts ResourceManagerLienTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#timeouts ResourceManagerLien#timeouts}

---

### ResourceManagerLienTimeouts <a name="ResourceManagerLienTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

&resourcemanagerlien.ResourceManagerLienTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#create ResourceManagerLien#create}. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#delete ResourceManagerLien#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#create ResourceManagerLien#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/resource_manager_lien#delete ResourceManagerLien#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerLienTimeoutsOutputReference <a name="ResourceManagerLienTimeoutsOutputReference" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/resourcemanagerlien"

resourcemanagerlien.NewResourceManagerLienTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceManagerLienTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



