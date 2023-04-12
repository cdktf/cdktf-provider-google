# `dataGoogleMonitoringUptimeCheckIps` Submodule <a name="`dataGoogleMonitoringUptimeCheckIps` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips google_monitoring_uptime_check_ips}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.NewDataGoogleMonitoringUptimeCheckIps(scope Construct, id *string, config DataGoogleMonitoringUptimeCheckIpsConfig) DataGoogleMonitoringUptimeCheckIps
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.DataGoogleMonitoringUptimeCheckIps_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.DataGoogleMonitoringUptimeCheckIps_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.DataGoogleMonitoringUptimeCheckIps_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps">UptimeCheckIps</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `UptimeCheckIps`<sup>Required</sup> <a name="UptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps"></a>

```go
func UptimeCheckIps() DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringUptimeCheckIpsConfig <a name="DataGoogleMonitoringUptimeCheckIpsConfig" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

&datagooglemonitoringuptimecheckips.DataGoogleMonitoringUptimeCheckIpsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

&datagooglemonitoringuptimecheckips.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.NewDataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get"></a>

```go
func Get(index *f64) DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringuptimecheckips"

datagooglemonitoringuptimecheckips.NewDataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a>

---



