# `dataGoogleDnsKeys` Submodule <a name="`dataGoogleDnsKeys` Submodule" id="@cdktf/provider-google.dataGoogleDnsKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDnsKeys <a name="DataGoogleDnsKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/dns_keys google_dns_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeys(scope Construct, id *string, config DataGoogleDnsKeysConfig) DataGoogleDnsKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig">DataGoogleDnsKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig">DataGoogleDnsKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putKeySigningKeys">PutKeySigningKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putZoneSigningKeys">PutZoneSigningKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetKeySigningKeys">ResetKeySigningKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetZoneSigningKeys">ResetZoneSigningKeys</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutKeySigningKeys` <a name="PutKeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putKeySigningKeys"></a>

```go
func PutKeySigningKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putKeySigningKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZoneSigningKeys` <a name="PutZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putZoneSigningKeys"></a>

```go
func PutZoneSigningKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.putZoneSigningKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKeySigningKeys` <a name="ResetKeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetKeySigningKeys"></a>

```go
func ResetKeySigningKeys()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZoneSigningKeys` <a name="ResetZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetZoneSigningKeys"></a>

```go
func ResetZoneSigningKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.DataGoogleDnsKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.DataGoogleDnsKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.DataGoogleDnsKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeys">KeySigningKeys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList">DataGoogleDnsKeysKeySigningKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeys">ZoneSigningKeys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList">DataGoogleDnsKeysZoneSigningKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeysInput">KeySigningKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZoneInput">ManagedZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeysInput">ZoneSigningKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZone">ManagedZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeySigningKeys`<sup>Required</sup> <a name="KeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeys"></a>

```go
func KeySigningKeys() DataGoogleDnsKeysKeySigningKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList">DataGoogleDnsKeysKeySigningKeysList</a>

---

##### `ZoneSigningKeys`<sup>Required</sup> <a name="ZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeys"></a>

```go
func ZoneSigningKeys() DataGoogleDnsKeysZoneSigningKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList">DataGoogleDnsKeysZoneSigningKeysList</a>

---

##### `KeySigningKeysInput`<sup>Optional</sup> <a name="KeySigningKeysInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeysInput"></a>

```go
func KeySigningKeysInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZoneInput"></a>

```go
func ManagedZoneInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneSigningKeysInput`<sup>Optional</sup> <a name="ZoneSigningKeysInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeysInput"></a>

```go
func ZoneSigningKeysInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZone"></a>

```go
func ManagedZone() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDnsKeysConfig <a name="DataGoogleDnsKeysConfig" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

&datagooglednskeys.DataGoogleDnsKeysConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedZone: *string,
	KeySigningKeys: interface{},
	Project: *string,
	ZoneSigningKeys: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.managedZone">ManagedZone</a></code> | <code>*string</code> | The Name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.keySigningKeys">KeySigningKeys</a></code> | <code>interface{}</code> | key_signing_keys block. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project for the Google Cloud. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.zoneSigningKeys">ZoneSigningKeys</a></code> | <code>interface{}</code> | zone_signing_keys block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.managedZone"></a>

```go
ManagedZone *string
```

- *Type:* *string

The Name of the zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#managed_zone DataGoogleDnsKeys#managed_zone}

---

##### `KeySigningKeys`<sup>Optional</sup> <a name="KeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.keySigningKeys"></a>

```go
KeySigningKeys interface{}
```

- *Type:* interface{}

key_signing_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#key_signing_keys DataGoogleDnsKeys#key_signing_keys}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project for the Google Cloud.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#project DataGoogleDnsKeys#project}

---

##### `ZoneSigningKeys`<sup>Optional</sup> <a name="ZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.zoneSigningKeys"></a>

```go
ZoneSigningKeys interface{}
```

- *Type:* interface{}

zone_signing_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#zone_signing_keys DataGoogleDnsKeys#zone_signing_keys}

---

### DataGoogleDnsKeysKeySigningKeys <a name="DataGoogleDnsKeysKeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

&datagooglednskeys.DataGoogleDnsKeysKeySigningKeys {
	Digests: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys.property.digests">Digests</a></code> | <code>interface{}</code> | digests block. |

---

##### `Digests`<sup>Optional</sup> <a name="Digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys.property.digests"></a>

```go
Digests interface{}
```

- *Type:* interface{}

digests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#digests DataGoogleDnsKeys#digests}

---

### DataGoogleDnsKeysKeySigningKeysDigests <a name="DataGoogleDnsKeysKeySigningKeysDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

&datagooglednskeys.DataGoogleDnsKeysKeySigningKeysDigests {

}
```


### DataGoogleDnsKeysZoneSigningKeys <a name="DataGoogleDnsKeysZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

&datagooglednskeys.DataGoogleDnsKeysZoneSigningKeys {
	Digests: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys.property.digests">Digests</a></code> | <code>interface{}</code> | digests block. |

---

##### `Digests`<sup>Optional</sup> <a name="Digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys.property.digests"></a>

```go
Digests interface{}
```

- *Type:* interface{}

digests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_keys#digests DataGoogleDnsKeys#digests}

---

### DataGoogleDnsKeysZoneSigningKeysDigests <a name="DataGoogleDnsKeysZoneSigningKeysDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

&datagooglednskeys.DataGoogleDnsKeysZoneSigningKeysDigests {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDnsKeysKeySigningKeysDigestsList <a name="DataGoogleDnsKeysKeySigningKeysDigestsList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysKeySigningKeysDigestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDnsKeysKeySigningKeysDigestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get"></a>

```go
func Get(index *f64) DataGoogleDnsKeysKeySigningKeysDigestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysKeySigningKeysDigestsOutputReference <a name="DataGoogleDnsKeysKeySigningKeysDigestsOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysKeySigningKeysDigestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDnsKeysKeySigningKeysDigestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysKeySigningKeysList <a name="DataGoogleDnsKeysKeySigningKeysList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysKeySigningKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDnsKeysKeySigningKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get"></a>

```go
func Get(index *f64) DataGoogleDnsKeysKeySigningKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysKeySigningKeysOutputReference <a name="DataGoogleDnsKeysKeySigningKeysOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysKeySigningKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDnsKeysKeySigningKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.putDigests">PutDigests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resetDigests">ResetDigests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDigests` <a name="PutDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.putDigests"></a>

```go
func PutDigests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.putDigests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDigests` <a name="ResetDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resetDigests"></a>

```go
func ResetDigests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digests">Digests</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList">DataGoogleDnsKeysKeySigningKeysDigestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.dsRecord">DsRecord</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyLength">KeyLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digestsInput">DigestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Digests`<sup>Required</sup> <a name="Digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digests"></a>

```go
func Digests() DataGoogleDnsKeysKeySigningKeysDigestsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList">DataGoogleDnsKeysKeySigningKeysDigestsList</a>

---

##### `DsRecord`<sup>Required</sup> <a name="DsRecord" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.dsRecord"></a>

```go
func DsRecord() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyLength"></a>

```go
func KeyLength() *f64
```

- *Type:* *f64

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `DigestsInput`<sup>Optional</sup> <a name="DigestsInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digestsInput"></a>

```go
func DigestsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysZoneSigningKeysDigestsList <a name="DataGoogleDnsKeysZoneSigningKeysDigestsList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysZoneSigningKeysDigestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDnsKeysZoneSigningKeysDigestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get"></a>

```go
func Get(index *f64) DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference <a name="DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysZoneSigningKeysDigestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysZoneSigningKeysList <a name="DataGoogleDnsKeysZoneSigningKeysList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysZoneSigningKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDnsKeysZoneSigningKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get"></a>

```go
func Get(index *f64) DataGoogleDnsKeysZoneSigningKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleDnsKeysZoneSigningKeysOutputReference <a name="DataGoogleDnsKeysZoneSigningKeysOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglednskeys"

datagooglednskeys.NewDataGoogleDnsKeysZoneSigningKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDnsKeysZoneSigningKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.putDigests">PutDigests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resetDigests">ResetDigests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDigests` <a name="PutDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.putDigests"></a>

```go
func PutDigests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.putDigests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDigests` <a name="ResetDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resetDigests"></a>

```go
func ResetDigests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digests">Digests</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList">DataGoogleDnsKeysZoneSigningKeysDigestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyLength">KeyLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digestsInput">DigestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Digests`<sup>Required</sup> <a name="Digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digests"></a>

```go
func Digests() DataGoogleDnsKeysZoneSigningKeysDigestsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList">DataGoogleDnsKeysZoneSigningKeysDigestsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyLength"></a>

```go
func KeyLength() *f64
```

- *Type:* *f64

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `DigestsInput`<sup>Optional</sup> <a name="DigestsInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digestsInput"></a>

```go
func DigestsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



