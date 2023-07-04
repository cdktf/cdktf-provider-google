# `google_dataplex_datascan`

Refer to the Terraform Registory for docs: [`google_dataplex_datascan`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan).

# `dataplexDatascan` Submodule <a name="`dataplexDatascan` Submodule" id="@cdktf/provider-google.dataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDatascan <a name="DataplexDatascan" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascan(scope Construct, id *string, config DataplexDatascanConfig) DataplexDatascan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig">DataplexDatascanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig">DataplexDatascanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec">PutDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec">PutDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec">PutExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec">ResetDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec">ResetDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutData` <a name="PutData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData"></a>

```go
func PutData(value DataplexDatascanData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---

##### `PutDataProfileSpec` <a name="PutDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec"></a>

```go
func PutDataProfileSpec(value DataplexDatascanDataProfileSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---

##### `PutDataQualitySpec` <a name="PutDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec"></a>

```go
func PutDataQualitySpec(value DataplexDatascanDataQualitySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---

##### `PutExecutionSpec` <a name="PutExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec"></a>

```go
func PutExecutionSpec(value DataplexDatascanExecutionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts"></a>

```go
func PutTimeouts(value DataplexDatascanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

---

##### `ResetDataProfileSpec` <a name="ResetDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec"></a>

```go
func ResetDataProfileSpec()
```

##### `ResetDataQualitySpec` <a name="ResetDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec"></a>

```go
func ResetDataQualitySpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileResult">DataProfileResult</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList">DataplexDatascanDataProfileResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualityResult">DataQualityResult</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList">DataplexDatascanDataQualityResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput">DataInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput">DataProfileSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput">DataQualitySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput">DataScanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput">ExecutionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId">DataScanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data"></a>

```go
func Data() DataplexDatascanDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a>

---

##### `DataProfileResult`<sup>Required</sup> <a name="DataProfileResult" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileResult"></a>

```go
func DataProfileResult() DataplexDatascanDataProfileResultList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList">DataplexDatascanDataProfileResultList</a>

---

##### `DataProfileSpec`<sup>Required</sup> <a name="DataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec"></a>

```go
func DataProfileSpec() DataplexDatascanDataProfileSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a>

---

##### `DataQualityResult`<sup>Required</sup> <a name="DataQualityResult" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualityResult"></a>

```go
func DataQualityResult() DataplexDatascanDataQualityResultList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList">DataplexDatascanDataQualityResultList</a>

---

##### `DataQualitySpec`<sup>Required</sup> <a name="DataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec"></a>

```go
func DataQualitySpec() DataplexDatascanDataQualitySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a>

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec"></a>

```go
func ExecutionSpec() DataplexDatascanExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a>

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus"></a>

```go
func ExecutionStatus() DataplexDatascanExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts"></a>

```go
func Timeouts() DataplexDatascanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput"></a>

```go
func DataInput() DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---

##### `DataProfileSpecInput`<sup>Optional</sup> <a name="DataProfileSpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput"></a>

```go
func DataProfileSpecInput() DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---

##### `DataQualitySpecInput`<sup>Optional</sup> <a name="DataQualitySpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput"></a>

```go
func DataQualitySpecInput() DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---

##### `DataScanIdInput`<sup>Optional</sup> <a name="DataScanIdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput"></a>

```go
func DataScanIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionSpecInput`<sup>Optional</sup> <a name="ExecutionSpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput"></a>

```go
func ExecutionSpecInput() DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId"></a>

```go
func DataScanId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDatascanConfig <a name="DataplexDatascanConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Data: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanData,
	DataScanId: *string,
	ExecutionSpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanExecutionSpec,
	Location: *string,
	DataProfileSpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataProfileSpec,
	DataQualitySpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpec,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId">DataScanId</a></code> | <code>*string</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location">Location</a></code> | <code>*string</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description">Description</a></code> | <code>*string</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data"></a>

```go
Data DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#data DataplexDatascan#data}

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId"></a>

```go
DataScanId *string
```

- *Type:* *string

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec"></a>

```go
ExecutionSpec DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `DataProfileSpec`<sup>Optional</sup> <a name="DataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec"></a>

```go
DataProfileSpec DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}

---

##### `DataQualitySpec`<sup>Optional</sup> <a name="DataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec"></a>

```go
DataQualitySpec DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the scan. A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts"></a>

```go
Timeouts DataplexDatascanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}

---

### DataplexDatascanData <a name="DataplexDatascanData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanData {
	Entity: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity">Entity</a></code> | <code>*string</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource">Resource</a></code> | <code>*string</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `Entity`<sup>Optional</sup> <a name="Entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity"></a>

```go
Entity *string
```

- *Type:* *string

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}

---

### DataplexDatascanDataProfileResult <a name="DataplexDatascanDataProfileResult" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResult {

}
```


### DataplexDatascanDataProfileResultProfile <a name="DataplexDatascanDataProfileResultProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfile {

}
```


### DataplexDatascanDataProfileResultProfileFields <a name="DataplexDatascanDataProfileResultProfileFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFields {

}
```


### DataplexDatascanDataProfileResultProfileFieldsProfile <a name="DataplexDatascanDataProfileResultProfileFieldsProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFieldsProfile {

}
```


### DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile <a name="DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile {

}
```


### DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile <a name="DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile {

}
```


### DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile <a name="DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile {

}
```


### DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues <a name="DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues {

}
```


### DataplexDatascanDataProfileResultScannedData <a name="DataplexDatascanDataProfileResultScannedData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultScannedData {

}
```


### DataplexDatascanDataProfileResultScannedDataIncrementalField <a name="DataplexDatascanDataProfileResultScannedDataIncrementalField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileResultScannedDataIncrementalField {

}
```


### DataplexDatascanDataProfileSpec <a name="DataplexDatascanDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpec {
	RowFilter: *string,
	SamplingPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter">RowFilter</a></code> | <code>*string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter"></a>

```go
RowFilter *string
```

- *Type:* *string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```go
SamplingPercent *f64
```

- *Type:* *f64

The percentage of the records to be selected from the dataset for DataScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataQualityResult <a name="DataplexDatascanDataQualityResult" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResult {

}
```


### DataplexDatascanDataQualityResultDimensions <a name="DataplexDatascanDataQualityResultDimensions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultDimensions {

}
```


### DataplexDatascanDataQualityResultRules <a name="DataplexDatascanDataQualityResultRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRules {

}
```


### DataplexDatascanDataQualityResultRulesRule <a name="DataplexDatascanDataQualityResultRulesRule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRule {

}
```


### DataplexDatascanDataQualityResultRulesRuleNonNullExpectation <a name="DataplexDatascanDataQualityResultRulesRuleNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleRangeExpectation <a name="DataplexDatascanDataQualityResultRulesRuleRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleRegexExpectation <a name="DataplexDatascanDataQualityResultRulesRuleRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation <a name="DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleSetExpectation <a name="DataplexDatascanDataQualityResultRulesRuleSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation <a name="DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation <a name="DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation {

}
```


### DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation <a name="DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation {

}
```


### DataplexDatascanDataQualityResultScannedData <a name="DataplexDatascanDataQualityResultScannedData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultScannedData {

}
```


### DataplexDatascanDataQualityResultScannedDataIncrementalField <a name="DataplexDatascanDataQualityResultScannedDataIncrementalField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualityResultScannedDataIncrementalField {

}
```


### DataplexDatascanDataQualitySpec <a name="DataplexDatascanDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpec {
	RowFilter: *string,
	Rules: interface{},
	SamplingPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter">RowFilter</a></code> | <code>*string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter"></a>

```go
RowFilter *string
```

- *Type:* *string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```go
SamplingPercent *f64
```

- *Type:* *f64

The percentage of the records to be selected from the dataset for DataScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataQualitySpecRules <a name="DataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRules {
	Dimension: *string,
	Column: *string,
	IgnoreNull: interface{},
	NonNullExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation,
	RangeExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation,
	RegexExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation,
	RowConditionExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation,
	SetExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation,
	StatisticRangeExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation,
	TableConditionExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation,
	Threshold: *f64,
	UniquenessExpectation: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension">Dimension</a></code> | <code>*string</code> | The dimension a rule belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column">Column</a></code> | <code>*string</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull">IgnoreNull</a></code> | <code>interface{}</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold">Threshold</a></code> | <code>*f64</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension"></a>

```go
Dimension *string
```

- *Type:* *string

The dimension a rule belongs to.

Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#dimension DataplexDatascan#dimension}

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column"></a>

```go
Column *string
```

- *Type:* *string

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#column DataplexDatascan#column}

---

##### `IgnoreNull`<sup>Optional</sup> <a name="IgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```go
IgnoreNull interface{}
```

- *Type:* interface{}

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#ignore_null DataplexDatascan#ignore_null}

---

##### `NonNullExpectation`<sup>Optional</sup> <a name="NonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```go
NonNullExpectation DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#non_null_expectation DataplexDatascan#non_null_expectation}

---

##### `RangeExpectation`<sup>Optional</sup> <a name="RangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```go
RangeExpectation DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#range_expectation DataplexDatascan#range_expectation}

---

##### `RegexExpectation`<sup>Optional</sup> <a name="RegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```go
RegexExpectation DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#regex_expectation DataplexDatascan#regex_expectation}

---

##### `RowConditionExpectation`<sup>Optional</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```go
RowConditionExpectation DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#row_condition_expectation DataplexDatascan#row_condition_expectation}

---

##### `SetExpectation`<sup>Optional</sup> <a name="SetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```go
SetExpectation DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#set_expectation DataplexDatascan#set_expectation}

---

##### `StatisticRangeExpectation`<sup>Optional</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```go
StatisticRangeExpectation DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#statistic_range_expectation DataplexDatascan#statistic_range_expectation}

---

##### `TableConditionExpectation`<sup>Optional</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```go
TableConditionExpectation DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#table_condition_expectation DataplexDatascan#table_condition_expectation}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#threshold DataplexDatascan#threshold}

---

##### `UniquenessExpectation`<sup>Optional</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```go
UniquenessExpectation DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#uniqueness_expectation DataplexDatascan#uniqueness_expectation}

---

### DataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation {

}
```


### DataplexDatascanDataQualitySpecRulesRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation {
	MaxValue: *string,
	MinValue: *string,
	StrictMaxEnabled: interface{},
	StrictMinEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">MaxValue</a></code> | <code>*string</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">MinValue</a></code> | <code>*string</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```go
MaxValue *string
```

- *Type:* *string

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```go
MinValue *string
```

- *Type:* *string

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```go
StrictMaxEnabled interface{}
```

- *Type:* interface{}

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```go
StrictMinEnabled interface{}
```

- *Type:* interface{}

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesRegexExpectation <a name="DataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation {
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">Regex</a></code> | <code>*string</code> | A regular expression the column value is expected to match. |

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}

---

### DataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation {
	SqlExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesSetExpectation <a name="DataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesSetExpectation {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values">Values</a></code> | <code>*[]*string</code> | Expected values for the column value. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#values DataplexDatascan#values}

---

### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
	Statistic: *string,
	MaxValue: *string,
	MinValue: *string,
	StrictMaxEnabled: interface{},
	StrictMinEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">Statistic</a></code> | <code>*string</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">MaxValue</a></code> | <code>*string</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">MinValue</a></code> | <code>*string</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```go
MaxValue *string
```

- *Type:* *string

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```go
MinValue *string
```

- *Type:* *string

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```go
StrictMaxEnabled interface{}
```

- *Type:* interface{}

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```go
StrictMinEnabled interface{}
```

- *Type:* interface{}

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation {
	SqlExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation {

}
```


### DataplexDatascanExecutionSpec <a name="DataplexDatascanExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpec {
	Trigger: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger,
	Field: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field">Field</a></code> | <code>*string</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger"></a>

```go
Trigger DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field"></a>

```go
Field *string
```

- *Type:* *string

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#field DataplexDatascan#field}

---

### DataplexDatascanExecutionSpecTrigger <a name="DataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTrigger {
	OnDemand: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand,
	Schedule: github.com/cdktf/cdktf-provider-google-go/google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```go
OnDemand DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```go
Schedule DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}

---

### DataplexDatascanExecutionSpecTriggerOnDemand <a name="DataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTriggerOnDemand {

}
```


### DataplexDatascanExecutionSpecTriggerSchedule <a name="DataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTriggerSchedule {
	Cron: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron">Cron</a></code> | <code>*string</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```go
Cron *string
```

- *Type:* *string

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}

---

### DataplexDatascanExecutionStatus <a name="DataplexDatascanExecutionStatus" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionStatus {

}
```


### DataplexDatascanTimeouts <a name="DataplexDatascanTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

&dataplexdatascan.DataplexDatascanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDatascanDataOutputReference <a name="DataplexDatascanDataOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity">ResetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntity` <a name="ResetEntity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity"></a>

```go
func ResetEntity()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput">EntityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity">Entity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityInput`<sup>Optional</sup> <a name="EntityInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput"></a>

```go
func EntityInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `Entity`<sup>Required</sup> <a name="Entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity"></a>

```go
func Entity() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---


### DataplexDatascanDataProfileResultList <a name="DataplexDatascanDataProfileResultList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultOutputReference <a name="DataplexDatascanDataProfileResultOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.profile">Profile</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList">DataplexDatascanDataProfileResultProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.rowCount">RowCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.scannedData">ScannedData</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList">DataplexDatascanDataProfileResultScannedDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResult">DataplexDatascanDataProfileResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.profile"></a>

```go
func Profile() DataplexDatascanDataProfileResultProfileList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList">DataplexDatascanDataProfileResultProfileList</a>

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.rowCount"></a>

```go
func RowCount() *string
```

- *Type:* *string

---

##### `ScannedData`<sup>Required</sup> <a name="ScannedData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.scannedData"></a>

```go
func ScannedData() DataplexDatascanDataProfileResultScannedDataList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList">DataplexDatascanDataProfileResultScannedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResult
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResult">DataplexDatascanDataProfileResult</a>

---


### DataplexDatascanDataProfileResultProfileFieldsList <a name="DataplexDatascanDataProfileResultProfileFieldsList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.profile">Profile</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFields">DataplexDatascanDataProfileResultProfileFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.profile"></a>

```go
func Profile() DataplexDatascanDataProfileResultProfileFieldsProfileList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFields">DataplexDatascanDataProfileResultProfileFields</a>

---


### DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList <a name="DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.average">Average</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.quartiles">Quartiles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.standardDeviation">StandardDeviation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile">DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Average`<sup>Required</sup> <a name="Average" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.average"></a>

```go
func Average() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `Quartiles`<sup>Required</sup> <a name="Quartiles" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.quartiles"></a>

```go
func Quartiles() *string
```

- *Type:* *string

---

##### `StandardDeviation`<sup>Required</sup> <a name="StandardDeviation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.standardDeviation"></a>

```go
func StandardDeviation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile">DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile</a>

---


### DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList <a name="DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.average">Average</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.quartiles">Quartiles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.standardDeviation">StandardDeviation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile">DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Average`<sup>Required</sup> <a name="Average" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.average"></a>

```go
func Average() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `Quartiles`<sup>Required</sup> <a name="Quartiles" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.quartiles"></a>

```go
func Quartiles() *string
```

- *Type:* *string

---

##### `StandardDeviation`<sup>Required</sup> <a name="StandardDeviation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.standardDeviation"></a>

```go
func StandardDeviation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile">DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile</a>

---


### DataplexDatascanDataProfileResultProfileFieldsProfileList <a name="DataplexDatascanDataProfileResultProfileFieldsProfileList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.distinctRatio">DistinctRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.doubleProfile">DoubleProfile</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.integerProfile">IntegerProfile</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.nullRatio">NullRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.stringProfile">StringProfile</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.topNValues">TopNValues</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList">DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfile">DataplexDatascanDataProfileResultProfileFieldsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DistinctRatio`<sup>Required</sup> <a name="DistinctRatio" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.distinctRatio"></a>

```go
func DistinctRatio() *f64
```

- *Type:* *f64

---

##### `DoubleProfile`<sup>Required</sup> <a name="DoubleProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.doubleProfile"></a>

```go
func DoubleProfile() DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList</a>

---

##### `IntegerProfile`<sup>Required</sup> <a name="IntegerProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.integerProfile"></a>

```go
func IntegerProfile() DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList</a>

---

##### `NullRatio`<sup>Required</sup> <a name="NullRatio" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.nullRatio"></a>

```go
func NullRatio() *f64
```

- *Type:* *f64

---

##### `StringProfile`<sup>Required</sup> <a name="StringProfile" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.stringProfile"></a>

```go
func StringProfile() DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList">DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList</a>

---

##### `TopNValues`<sup>Required</sup> <a name="TopNValues" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.topNValues"></a>

```go
func TopNValues() DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList">DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFieldsProfile
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfile">DataplexDatascanDataProfileResultProfileFieldsProfile</a>

---


### DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList <a name="DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.averageLength">AverageLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.maxLength">MaxLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.minLength">MinLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile">DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageLength`<sup>Required</sup> <a name="AverageLength" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.averageLength"></a>

```go
func AverageLength() *f64
```

- *Type:* *f64

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.maxLength"></a>

```go
func MaxLength() *string
```

- *Type:* *string

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.minLength"></a>

```go
func MinLength() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile">DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile</a>

---


### DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList <a name="DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference <a name="DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues">DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues">DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues</a>

---


### DataplexDatascanDataProfileResultProfileList <a name="DataplexDatascanDataProfileResultProfileList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultProfileOutputReference <a name="DataplexDatascanDataProfileResultProfileOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList">DataplexDatascanDataProfileResultProfileFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfile">DataplexDatascanDataProfileResultProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.fields"></a>

```go
func Fields() DataplexDatascanDataProfileResultProfileFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileFieldsList">DataplexDatascanDataProfileResultProfileFieldsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultProfile
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultProfile">DataplexDatascanDataProfileResultProfile</a>

---


### DataplexDatascanDataProfileResultScannedDataIncrementalFieldList <a name="DataplexDatascanDataProfileResultScannedDataIncrementalFieldList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultScannedDataIncrementalFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultScannedDataIncrementalFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference <a name="DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalField">DataplexDatascanDataProfileResultScannedDataIncrementalField</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultScannedDataIncrementalField
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalField">DataplexDatascanDataProfileResultScannedDataIncrementalField</a>

---


### DataplexDatascanDataProfileResultScannedDataList <a name="DataplexDatascanDataProfileResultScannedDataList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultScannedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataProfileResultScannedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataProfileResultScannedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataProfileResultScannedDataOutputReference <a name="DataplexDatascanDataProfileResultScannedDataOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileResultScannedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataProfileResultScannedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.incrementalField">IncrementalField</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList">DataplexDatascanDataProfileResultScannedDataIncrementalFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedData">DataplexDatascanDataProfileResultScannedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalField`<sup>Required</sup> <a name="IncrementalField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.incrementalField"></a>

```go
func IncrementalField() DataplexDatascanDataProfileResultScannedDataIncrementalFieldList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataIncrementalFieldList">DataplexDatascanDataProfileResultScannedDataIncrementalFieldList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileResultScannedData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileResultScannedData">DataplexDatascanDataProfileResultScannedData</a>

---


### DataplexDatascanDataProfileSpecOutputReference <a name="DataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```go
func ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() *string
```

- *Type:* *string

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```go
func SamplingPercentInput() *f64
```

- *Type:* *f64

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```go
func RowFilter() *string
```

- *Type:* *string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```go
func SamplingPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---


### DataplexDatascanDataQualityResultDimensionsList <a name="DataplexDatascanDataQualityResultDimensionsList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultDimensionsOutputReference <a name="DataplexDatascanDataQualityResultDimensionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.passed">Passed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensions">DataplexDatascanDataQualityResultDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passed`<sup>Required</sup> <a name="Passed" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.passed"></a>

```go
func Passed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultDimensions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensions">DataplexDatascanDataQualityResultDimensions</a>

---


### DataplexDatascanDataQualityResultList <a name="DataplexDatascanDataQualityResultList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultOutputReference <a name="DataplexDatascanDataQualityResultOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList">DataplexDatascanDataQualityResultDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.passed">Passed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.rowCount">RowCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList">DataplexDatascanDataQualityResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.scannedData">ScannedData</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList">DataplexDatascanDataQualityResultScannedDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResult">DataplexDatascanDataQualityResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.dimensions"></a>

```go
func Dimensions() DataplexDatascanDataQualityResultDimensionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultDimensionsList">DataplexDatascanDataQualityResultDimensionsList</a>

---

##### `Passed`<sup>Required</sup> <a name="Passed" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.passed"></a>

```go
func Passed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.rowCount"></a>

```go
func RowCount() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.rules"></a>

```go
func Rules() DataplexDatascanDataQualityResultRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList">DataplexDatascanDataQualityResultRulesList</a>

---

##### `ScannedData`<sup>Required</sup> <a name="ScannedData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.scannedData"></a>

```go
func ScannedData() DataplexDatascanDataQualityResultScannedDataList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList">DataplexDatascanDataQualityResultScannedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResult
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResult">DataplexDatascanDataQualityResult</a>

---


### DataplexDatascanDataQualityResultRulesList <a name="DataplexDatascanDataQualityResultRulesList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesOutputReference <a name="DataplexDatascanDataQualityResultRulesOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.evaluatedCount">EvaluatedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.failingRowsQuery">FailingRowsQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.nullCount">NullCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passed">Passed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passedCount">PassedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passRatio">PassRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList">DataplexDatascanDataQualityResultRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRules">DataplexDatascanDataQualityResultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluatedCount`<sup>Required</sup> <a name="EvaluatedCount" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.evaluatedCount"></a>

```go
func EvaluatedCount() *string
```

- *Type:* *string

---

##### `FailingRowsQuery`<sup>Required</sup> <a name="FailingRowsQuery" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.failingRowsQuery"></a>

```go
func FailingRowsQuery() *string
```

- *Type:* *string

---

##### `NullCount`<sup>Required</sup> <a name="NullCount" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.nullCount"></a>

```go
func NullCount() *string
```

- *Type:* *string

---

##### `Passed`<sup>Required</sup> <a name="Passed" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passed"></a>

```go
func Passed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PassedCount`<sup>Required</sup> <a name="PassedCount" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passedCount"></a>

```go
func PassedCount() *string
```

- *Type:* *string

---

##### `PassRatio`<sup>Required</sup> <a name="PassRatio" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.passRatio"></a>

```go
func PassRatio() *f64
```

- *Type:* *f64

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.rule"></a>

```go
func Rule() DataplexDatascanDataQualityResultRulesRuleList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList">DataplexDatascanDataQualityResultRulesRuleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRules
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRules">DataplexDatascanDataQualityResultRules</a>

---


### DataplexDatascanDataQualityResultRulesRuleList <a name="DataplexDatascanDataQualityResultRulesRuleList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleNonNullExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectation">DataplexDatascanDataQualityResultRulesRuleNonNullExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectation">DataplexDatascanDataQualityResultRulesRuleNonNullExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.ignoreNull">IgnoreNull</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList">DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList">DataplexDatascanDataQualityResultRulesRuleRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList">DataplexDatascanDataQualityResultRulesRuleRegexExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList">DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList">DataplexDatascanDataQualityResultRulesRuleSetExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList">DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList">DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList">DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRule">DataplexDatascanDataQualityResultRulesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `IgnoreNull`<sup>Required</sup> <a name="IgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.ignoreNull"></a>

```go
func IgnoreNull() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NonNullExpectation`<sup>Required</sup> <a name="NonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.nonNullExpectation"></a>

```go
func NonNullExpectation() DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList">DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList</a>

---

##### `RangeExpectation`<sup>Required</sup> <a name="RangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.rangeExpectation"></a>

```go
func RangeExpectation() DataplexDatascanDataQualityResultRulesRuleRangeExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList">DataplexDatascanDataQualityResultRulesRuleRangeExpectationList</a>

---

##### `RegexExpectation`<sup>Required</sup> <a name="RegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.regexExpectation"></a>

```go
func RegexExpectation() DataplexDatascanDataQualityResultRulesRuleRegexExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList">DataplexDatascanDataQualityResultRulesRuleRegexExpectationList</a>

---

##### `RowConditionExpectation`<sup>Required</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.rowConditionExpectation"></a>

```go
func RowConditionExpectation() DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList">DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList</a>

---

##### `SetExpectation`<sup>Required</sup> <a name="SetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.setExpectation"></a>

```go
func SetExpectation() DataplexDatascanDataQualityResultRulesRuleSetExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList">DataplexDatascanDataQualityResultRulesRuleSetExpectationList</a>

---

##### `StatisticRangeExpectation`<sup>Required</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.statisticRangeExpectation"></a>

```go
func StatisticRangeExpectation() DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList">DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList</a>

---

##### `TableConditionExpectation`<sup>Required</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.tableConditionExpectation"></a>

```go
func TableConditionExpectation() DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList">DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `UniquenessExpectation`<sup>Required</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.uniquenessExpectation"></a>

```go
func UniquenessExpectation() DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList">DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRule">DataplexDatascanDataQualityResultRulesRule</a>

---


### DataplexDatascanDataQualityResultRulesRuleRangeExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleRangeExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRangeExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleRangeExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectation">DataplexDatascanDataQualityResultRulesRuleRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRangeExpectation">DataplexDatascanDataQualityResultRulesRuleRangeExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleRegexExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleRegexExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRegexExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleRegexExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectation">DataplexDatascanDataQualityResultRulesRuleRegexExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRegexExpectation">DataplexDatascanDataQualityResultRulesRuleRegexExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation">DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation">DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleSetExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleSetExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleSetExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleSetExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectation">DataplexDatascanDataQualityResultRulesRuleSetExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleSetExpectation">DataplexDatascanDataQualityResultRulesRuleSetExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation">DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation">DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation">DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation">DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation</a>

---


### DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList <a name="DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference <a name="DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation">DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation">DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation</a>

---


### DataplexDatascanDataQualityResultScannedDataIncrementalFieldList <a name="DataplexDatascanDataQualityResultScannedDataIncrementalFieldList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultScannedDataIncrementalFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultScannedDataIncrementalFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference <a name="DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalField">DataplexDatascanDataQualityResultScannedDataIncrementalField</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultScannedDataIncrementalField
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalField">DataplexDatascanDataQualityResultScannedDataIncrementalField</a>

---


### DataplexDatascanDataQualityResultScannedDataList <a name="DataplexDatascanDataQualityResultScannedDataList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultScannedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualityResultScannedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualityResultScannedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanDataQualityResultScannedDataOutputReference <a name="DataplexDatascanDataQualityResultScannedDataOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualityResultScannedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualityResultScannedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.incrementalField">IncrementalField</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList">DataplexDatascanDataQualityResultScannedDataIncrementalFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedData">DataplexDatascanDataQualityResultScannedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalField`<sup>Required</sup> <a name="IncrementalField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.incrementalField"></a>

```go
func IncrementalField() DataplexDatascanDataQualityResultScannedDataIncrementalFieldList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataIncrementalFieldList">DataplexDatascanDataQualityResultScannedDataIncrementalFieldList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualityResultScannedData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualityResultScannedData">DataplexDatascanDataQualityResultScannedData</a>

---


### DataplexDatascanDataQualitySpecOutputReference <a name="DataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```go
func ResetRules()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```go
func ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```go
func Rules() DataplexDatascanDataQualitySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a>

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```go
func SamplingPercentInput() *f64
```

- *Type:* *f64

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```go
func RowFilter() *string
```

- *Type:* *string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```go
func SamplingPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---


### DataplexDatascanDataQualitySpecRulesList <a name="DataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualitySpecRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualitySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesOutputReference <a name="DataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualitySpecRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">PutNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">PutRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">PutRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">PutRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">PutSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">PutStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">PutTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">PutUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">ResetIgnoreNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">ResetNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">ResetRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">ResetRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">ResetRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">ResetSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">ResetStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">ResetTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">ResetUniquenessExpectation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNonNullExpectation` <a name="PutNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```go
func PutNonNullExpectation(value DataplexDatascanDataQualitySpecRulesNonNullExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `PutRangeExpectation` <a name="PutRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```go
func PutRangeExpectation(value DataplexDatascanDataQualitySpecRulesRangeExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `PutRegexExpectation` <a name="PutRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```go
func PutRegexExpectation(value DataplexDatascanDataQualitySpecRulesRegexExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `PutRowConditionExpectation` <a name="PutRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```go
func PutRowConditionExpectation(value DataplexDatascanDataQualitySpecRulesRowConditionExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `PutSetExpectation` <a name="PutSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```go
func PutSetExpectation(value DataplexDatascanDataQualitySpecRulesSetExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `PutStatisticRangeExpectation` <a name="PutStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```go
func PutStatisticRangeExpectation(value DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `PutTableConditionExpectation` <a name="PutTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```go
func PutTableConditionExpectation(value DataplexDatascanDataQualitySpecRulesTableConditionExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `PutUniquenessExpectation` <a name="PutUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```go
func PutUniquenessExpectation(value DataplexDatascanDataQualitySpecRulesUniquenessExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetIgnoreNull` <a name="ResetIgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```go
func ResetIgnoreNull()
```

##### `ResetNonNullExpectation` <a name="ResetNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```go
func ResetNonNullExpectation()
```

##### `ResetRangeExpectation` <a name="ResetRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```go
func ResetRangeExpectation()
```

##### `ResetRegexExpectation` <a name="ResetRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```go
func ResetRegexExpectation()
```

##### `ResetRowConditionExpectation` <a name="ResetRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```go
func ResetRowConditionExpectation()
```

##### `ResetSetExpectation` <a name="ResetSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```go
func ResetSetExpectation()
```

##### `ResetStatisticRangeExpectation` <a name="ResetStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```go
func ResetStatisticRangeExpectation()
```

##### `ResetTableConditionExpectation` <a name="ResetTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```go
func ResetTableConditionExpectation()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetUniquenessExpectation` <a name="ResetUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```go
func ResetUniquenessExpectation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">IgnoreNullInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">NonNullExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">RangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">RegexExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">RowConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">SetExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">StatisticRangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">TableConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">UniquenessExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">IgnoreNull</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonNullExpectation`<sup>Required</sup> <a name="NonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```go
func NonNullExpectation() DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `RangeExpectation`<sup>Required</sup> <a name="RangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```go
func RangeExpectation() DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `RegexExpectation`<sup>Required</sup> <a name="RegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```go
func RegexExpectation() DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `RowConditionExpectation`<sup>Required</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```go
func RowConditionExpectation() DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `SetExpectation`<sup>Required</sup> <a name="SetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```go
func SetExpectation() DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `StatisticRangeExpectation`<sup>Required</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```go
func StatisticRangeExpectation() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `TableConditionExpectation`<sup>Required</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```go
func TableConditionExpectation() DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `UniquenessExpectation`<sup>Required</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```go
func UniquenessExpectation() DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *string
```

- *Type:* *string

---

##### `IgnoreNullInput`<sup>Optional</sup> <a name="IgnoreNullInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```go
func IgnoreNullInput() interface{}
```

- *Type:* interface{}

---

##### `NonNullExpectationInput`<sup>Optional</sup> <a name="NonNullExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```go
func NonNullExpectationInput() DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `RangeExpectationInput`<sup>Optional</sup> <a name="RangeExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```go
func RangeExpectationInput() DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `RegexExpectationInput`<sup>Optional</sup> <a name="RegexExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```go
func RegexExpectationInput() DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `RowConditionExpectationInput`<sup>Optional</sup> <a name="RowConditionExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```go
func RowConditionExpectationInput() DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `SetExpectationInput`<sup>Optional</sup> <a name="SetExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```go
func SetExpectationInput() DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `StatisticRangeExpectationInput`<sup>Optional</sup> <a name="StatisticRangeExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```go
func StatisticRangeExpectationInput() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `TableConditionExpectationInput`<sup>Optional</sup> <a name="TableConditionExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```go
func TableConditionExpectationInput() DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `UniquenessExpectationInput`<sup>Optional</sup> <a name="UniquenessExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```go
func UniquenessExpectationInput() DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `IgnoreNull`<sup>Required</sup> <a name="IgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```go
func IgnoreNull() interface{}
```

- *Type:* interface{}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```go
func ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```go
func ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *string
```

- *Type:* *string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *string
```

- *Type:* *string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```go
func StrictMaxEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```go
func StrictMinEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```go
func ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```go
func ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *string
```

- *Type:* *string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *string
```

- *Type:* *string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```go
func StrictMaxEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```go
func StrictMinEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### DataplexDatascanExecutionSpecOutputReference <a name="DataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```go
func PutTrigger(value DataplexDatascanExecutionSpecTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```go
func Trigger() DataplexDatascanExecutionSpecTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```go
func TriggerInput() DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---


### DataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="DataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### DataplexDatascanExecutionSpecTriggerOutputReference <a name="DataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">PutOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemand` <a name="PutOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```go
func PutOnDemand(value DataplexDatascanExecutionSpecTriggerOnDemand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```go
func PutSchedule(value DataplexDatascanExecutionSpecTriggerSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```go
func ResetOnDemand()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```go
func OnDemand() DataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```go
func Schedule() DataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```go
func OnDemandInput() DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---


### DataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="DataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">CronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```go
func CronInput() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---


### DataplexDatascanExecutionStatusList <a name="DataplexDatascanExecutionStatusList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanExecutionStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get"></a>

```go
func Get(index *f64) DataplexDatascanExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanExecutionStatusOutputReference <a name="DataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanExecutionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">LatestJobEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">LatestJobStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestJobEndTime`<sup>Required</sup> <a name="LatestJobEndTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```go
func LatestJobEndTime() *string
```

- *Type:* *string

---

##### `LatestJobStartTime`<sup>Required</sup> <a name="LatestJobStartTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```go
func LatestJobStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a>

---


### DataplexDatascanTimeoutsOutputReference <a name="DataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



