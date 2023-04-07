# `dataGoogleNetblockIpRanges` Submodule <a name="`dataGoogleNetblockIpRanges` Submodule" id="@cdktf/provider-google.dataGoogleNetblockIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetblockIpRanges <a name="DataGoogleNetblockIpRanges" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges google_netblock_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglenetblockipranges"

datagooglenetblockipranges.NewDataGoogleNetblockIpRanges(scope Construct, id *string, config DataGoogleNetblockIpRangesConfig) DataGoogleNetblockIpRanges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig">DataGoogleNetblockIpRangesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig">DataGoogleNetblockIpRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetRangeType">ResetRangeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetId"></a>

```go
func ResetId()
```

##### `ResetRangeType` <a name="ResetRangeType" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.resetRangeType"></a>

```go
func ResetRangeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglenetblockipranges"

datagooglenetblockipranges.DataGoogleNetblockIpRanges_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglenetblockipranges"

datagooglenetblockipranges.DataGoogleNetblockIpRanges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglenetblockipranges"

datagooglenetblockipranges.DataGoogleNetblockIpRanges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocksIpv4">CidrBlocksIpv4</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocksIpv6">CidrBlocksIpv6</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.rangeTypeInput">RangeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.rangeType">RangeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `CidrBlocksIpv4`<sup>Required</sup> <a name="CidrBlocksIpv4" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocksIpv4"></a>

```go
func CidrBlocksIpv4() *[]*string
```

- *Type:* *[]*string

---

##### `CidrBlocksIpv6`<sup>Required</sup> <a name="CidrBlocksIpv6" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.cidrBlocksIpv6"></a>

```go
func CidrBlocksIpv6() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RangeTypeInput`<sup>Optional</sup> <a name="RangeTypeInput" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.rangeTypeInput"></a>

```go
func RangeTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RangeType`<sup>Required</sup> <a name="RangeType" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.rangeType"></a>

```go
func RangeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRanges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetblockIpRangesConfig <a name="DataGoogleNetblockIpRangesConfig" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglenetblockipranges"

&datagooglenetblockipranges.DataGoogleNetblockIpRangesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	RangeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#id DataGoogleNetblockIpRanges#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.rangeType">RangeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#range_type DataGoogleNetblockIpRanges#range_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#id DataGoogleNetblockIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RangeType`<sup>Optional</sup> <a name="RangeType" id="@cdktf/provider-google.dataGoogleNetblockIpRanges.DataGoogleNetblockIpRangesConfig.property.rangeType"></a>

```go
RangeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#range_type DataGoogleNetblockIpRanges#range_type}.

---



