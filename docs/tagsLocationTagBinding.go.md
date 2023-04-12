# `tagsLocationTagBinding` Submodule <a name="`tagsLocationTagBinding` Submodule" id="@cdktf/provider-google.tagsLocationTagBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagsLocationTagBinding <a name="TagsLocationTagBinding" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding google_tags_location_tag_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

tagslocationtagbinding.NewTagsLocationTagBinding(scope Construct, id *string, config TagsLocationTagBindingConfig) TagsLocationTagBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig">TagsLocationTagBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig">TagsLocationTagBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts"></a>

```go
func PutTimeouts(value TagsLocationTagBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

tagslocationtagbinding.TagsLocationTagBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

tagslocationtagbinding.TagsLocationTagBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

tagslocationtagbinding.TagsLocationTagBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference">TagsLocationTagBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeouts"></a>

```go
func Timeouts() TagsLocationTagBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference">TagsLocationTagBindingTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TagsLocationTagBindingConfig <a name="TagsLocationTagBindingConfig" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

&tagslocationtagbinding.TagsLocationTagBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	TagValue: *string,
	Id: *string,
	Location: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.parent">Parent</a></code> | <code>*string</code> | The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.tagValue">TagValue</a></code> | <code>*string</code> | The TagValue of the TagBinding. Must be of the form tagValues/456. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#id TagsLocationTagBinding#id}. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#parent TagsLocationTagBinding#parent}

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

The TagValue of the TagBinding. Must be of the form tagValues/456.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#tag_value TagsLocationTagBinding#tag_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#id TagsLocationTagBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#location TagsLocationTagBinding#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.timeouts"></a>

```go
Timeouts TagsLocationTagBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#timeouts TagsLocationTagBinding#timeouts}

---

### TagsLocationTagBindingTimeouts <a name="TagsLocationTagBindingTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

&tagslocationtagbinding.TagsLocationTagBindingTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#create TagsLocationTagBinding#create}. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#delete TagsLocationTagBinding#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#create TagsLocationTagBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_location_tag_binding#delete TagsLocationTagBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### TagsLocationTagBindingTimeoutsOutputReference <a name="TagsLocationTagBindingTimeoutsOutputReference" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/tagslocationtagbinding"

tagslocationtagbinding.NewTagsLocationTagBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagsLocationTagBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



