# `bigqueryJob` Submodule <a name="`bigqueryJob` Submodule" id="@cdktf/provider-google.bigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryJob <a name="BigqueryJob" id="@cdktf/provider-google.bigqueryJob.BigqueryJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJob(scope Construct, id *string, config BigqueryJobConfig) BigqueryJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig">BigqueryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig">BigqueryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy">PutCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad">PutLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy">ResetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs">ResetJobTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad">ResetLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCopy` <a name="PutCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy"></a>

```go
func PutCopy(value BigqueryJobCopy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `PutExtract` <a name="PutExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract"></a>

```go
func PutExtract(value BigqueryJobExtract)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `PutLoad` <a name="PutLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad"></a>

```go
func PutLoad(value BigqueryJobLoad)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery"></a>

```go
func PutQuery(value BigqueryJobQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---

##### `ResetCopy` <a name="ResetCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy"></a>

```go
func ResetCopy()
```

##### `ResetExtract` <a name="ResetExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract"></a>

```go
func ResetExtract()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId"></a>

```go
func ResetId()
```

##### `ResetJobTimeoutMs` <a name="ResetJobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs"></a>

```go
func ResetJobTimeoutMs()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoad` <a name="ResetLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad"></a>

```go
func ResetLoad()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.BigqueryJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.BigqueryJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.BigqueryJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy">Copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract">Extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType">JobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load">Load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query">Query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput">CopyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput">ExtractInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput">JobTimeoutMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput">LoadInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs">JobTimeoutMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Copy`<sup>Required</sup> <a name="Copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy"></a>

```go
func Copy() BigqueryJobCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a>

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract"></a>

```go
func Extract() BigqueryJobExtractOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a>

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType"></a>

```go
func JobType() *string
```

- *Type:* *string

---

##### `Load`<sup>Required</sup> <a name="Load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load"></a>

```go
func Load() BigqueryJobLoadOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query"></a>

```go
func Query() BigqueryJobQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status"></a>

```go
func Status() BigqueryJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts"></a>

```go
func Timeouts() BigqueryJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a>

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `CopyInput`<sup>Optional</sup> <a name="CopyInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput"></a>

```go
func CopyInput() BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput"></a>

```go
func ExtractInput() BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `JobTimeoutMsInput`<sup>Optional</sup> <a name="JobTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput"></a>

```go
func JobTimeoutMsInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadInput`<sup>Optional</sup> <a name="LoadInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput"></a>

```go
func LoadInput() BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput"></a>

```go
func QueryInput() BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `JobTimeoutMs`<sup>Required</sup> <a name="JobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs"></a>

```go
func JobTimeoutMs() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryJobConfig <a name="BigqueryJobConfig" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobId: *string,
	Copy: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobCopy,
	Extract: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobExtract,
	Id: *string,
	JobTimeoutMs: *string,
	Labels: *map[string]*string,
	Load: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobLoad,
	Location: *string,
	Project: *string,
	Query: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobQuery,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId">JobId</a></code> | <code>*string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy">Copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract">Extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs">JobTimeoutMs</a></code> | <code>*string</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load">Load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query">Query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#job_id BigqueryJob#job_id}

---

##### `Copy`<sup>Optional</sup> <a name="Copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy"></a>

```go
Copy BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#copy BigqueryJob#copy}

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract"></a>

```go
Extract BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#extract BigqueryJob#extract}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobTimeoutMs`<sup>Optional</sup> <a name="JobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs"></a>

```go
JobTimeoutMs *string
```

- *Type:* *string

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this job. You can use these to organize and group your jobs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#labels BigqueryJob#labels}

---

##### `Load`<sup>Optional</sup> <a name="Load" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load"></a>

```go
Load BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#load BigqueryJob#load}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#location BigqueryJob#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project BigqueryJob#project}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query"></a>

```go
Query BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#query BigqueryJob#query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts"></a>

```go
Timeouts BigqueryJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#timeouts BigqueryJob#timeouts}

---

### BigqueryJobCopy <a name="BigqueryJobCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobCopy {
	SourceTables: interface{},
	CreateDisposition: *string,
	DestinationEncryptionConfiguration: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration,
	DestinationTable: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobCopyDestinationTable,
	WriteDisposition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables">SourceTables</a></code> | <code>interface{}</code> | source_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `SourceTables`<sup>Required</sup> <a name="SourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables"></a>

```go
SourceTables interface{}
```

- *Type:* interface{}

source_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#source_tables BigqueryJob#source_tables}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition"></a>

```go
CreateDisposition *string
```

- *Type:* *string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```go
DestinationEncryptionConfiguration BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable"></a>

```go
DestinationTable BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition"></a>

```go
WriteDisposition *string
```

- *Type:* *string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobCopyDestinationEncryptionConfiguration <a name="BigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobCopyDestinationEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobCopyDestinationTable <a name="BigqueryJobCopyDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobCopyDestinationTable {
	TableId: *string,
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId">TableId</a></code> | <code>*string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#table_id BigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobCopySourceTables <a name="BigqueryJobCopySourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobCopySourceTables {
	TableId: *string,
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId">TableId</a></code> | <code>*string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#table_id BigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtract <a name="BigqueryJobExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobExtract {
	DestinationUris: *[]*string,
	Compression: *string,
	DestinationFormat: *string,
	FieldDelimiter: *string,
	PrintHeader: interface{},
	SourceModel: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobExtractSourceModel,
	SourceTable: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobExtractSourceTable,
	UseAvroLogicalTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris">DestinationUris</a></code> | <code>*[]*string</code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression">Compression</a></code> | <code>*string</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat">DestinationFormat</a></code> | <code>*string</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader">PrintHeader</a></code> | <code>interface{}</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel">SourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable">SourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>interface{}</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `DestinationUris`<sup>Required</sup> <a name="DestinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris"></a>

```go
DestinationUris *[]*string
```

- *Type:* *[]*string

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_uris BigqueryJob#destination_uris}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#compression BigqueryJob#compression}

---

##### `DestinationFormat`<sup>Optional</sup> <a name="DestinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat"></a>

```go
DestinationFormat *string
```

- *Type:* *string

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_format BigqueryJob#destination_format}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `PrintHeader`<sup>Optional</sup> <a name="PrintHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader"></a>

```go
PrintHeader interface{}
```

- *Type:* interface{}

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#print_header BigqueryJob#print_header}

---

##### `SourceModel`<sup>Optional</sup> <a name="SourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel"></a>

```go
SourceModel BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#source_model BigqueryJob#source_model}

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable"></a>

```go
SourceTable BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#source_table BigqueryJob#source_table}

---

##### `UseAvroLogicalTypes`<sup>Optional</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes"></a>

```go
UseAvroLogicalTypes interface{}
```

- *Type:* interface{}

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#use_avro_logical_types BigqueryJob#use_avro_logical_types}

---

### BigqueryJobExtractSourceModel <a name="BigqueryJobExtractSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobExtractSourceModel {
	DatasetId: *string,
	ModelId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId">ModelId</a></code> | <code>*string</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this model. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

The ID of the model.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#model_id BigqueryJob#model_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtractSourceTable <a name="BigqueryJobExtractSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobExtractSourceTable {
	TableId: *string,
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId">TableId</a></code> | <code>*string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#table_id BigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoad <a name="BigqueryJobLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobLoad {
	DestinationTable: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobLoadDestinationTable,
	SourceUris: *[]*string,
	AllowJaggedRows: interface{},
	AllowQuotedNewlines: interface{},
	Autodetect: interface{},
	CreateDisposition: *string,
	DestinationEncryptionConfiguration: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration,
	Encoding: *string,
	FieldDelimiter: *string,
	IgnoreUnknownValues: interface{},
	JsonExtension: *string,
	MaxBadRecords: *f64,
	NullMarker: *string,
	ProjectionFields: *[]*string,
	Quote: *string,
	SchemaUpdateOptions: *[]*string,
	SkipLeadingRows: *f64,
	SourceFormat: *string,
	TimePartitioning: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobLoadTimePartitioning,
	WriteDisposition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris">SourceUris</a></code> | <code>*[]*string</code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>interface{}</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>interface{}</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect">Autodetect</a></code> | <code>interface{}</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding">Encoding</a></code> | <code>*string</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>interface{}</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension">JsonExtension</a></code> | <code>*string</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords">MaxBadRecords</a></code> | <code>*f64</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker">NullMarker</a></code> | <code>*string</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields">ProjectionFields</a></code> | <code>*[]*string</code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote">Quote</a></code> | <code>*string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>*[]*string</code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable"></a>

```go
DestinationTable BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris"></a>

```go
SourceUris *[]*string
```

- *Type:* *[]*string

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#source_uris BigqueryJob#source_uris}

---

##### `AllowJaggedRows`<sup>Optional</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows"></a>

```go
AllowJaggedRows interface{}
```

- *Type:* interface{}

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#allow_jagged_rows BigqueryJob#allow_jagged_rows}

---

##### `AllowQuotedNewlines`<sup>Optional</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines"></a>

```go
AllowQuotedNewlines interface{}
```

- *Type:* interface{}

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}

---

##### `Autodetect`<sup>Optional</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect"></a>

```go
Autodetect interface{}
```

- *Type:* interface{}

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#autodetect BigqueryJob#autodetect}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition"></a>

```go
CreateDisposition *string
```

- *Type:* *string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```go
DestinationEncryptionConfiguration BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#encoding BigqueryJob#encoding}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `IgnoreUnknownValues`<sup>Optional</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues"></a>

```go
IgnoreUnknownValues interface{}
```

- *Type:* interface{}

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#ignore_unknown_values BigqueryJob#ignore_unknown_values}

---

##### `JsonExtension`<sup>Optional</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension"></a>

```go
JsonExtension *string
```

- *Type:* *string

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#json_extension BigqueryJob#json_extension}

---

##### `MaxBadRecords`<sup>Optional</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords"></a>

```go
MaxBadRecords *f64
```

- *Type:* *f64

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#max_bad_records BigqueryJob#max_bad_records}

---

##### `NullMarker`<sup>Optional</sup> <a name="NullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker"></a>

```go
NullMarker *string
```

- *Type:* *string

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#null_marker BigqueryJob#null_marker}

---

##### `ProjectionFields`<sup>Optional</sup> <a name="ProjectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields"></a>

```go
ProjectionFields *[]*string
```

- *Type:* *[]*string

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#projection_fields BigqueryJob#projection_fields}

---

##### `Quote`<sup>Optional</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote"></a>

```go
Quote *string
```

- *Type:* *string

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#quote BigqueryJob#quote}

---

##### `SchemaUpdateOptions`<sup>Optional</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions"></a>

```go
SchemaUpdateOptions *[]*string
```

- *Type:* *[]*string

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows"></a>

```go
SkipLeadingRows *f64
```

- *Type:* *f64

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#skip_leading_rows BigqueryJob#skip_leading_rows}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat"></a>

```go
SourceFormat *string
```

- *Type:* *string

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#source_format BigqueryJob#source_format}

---

##### `TimePartitioning`<sup>Optional</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning"></a>

```go
TimePartitioning BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#time_partitioning BigqueryJob#time_partitioning}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition"></a>

```go
WriteDisposition *string
```

- *Type:* *string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobLoadDestinationEncryptionConfiguration <a name="BigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobLoadDestinationEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobLoadDestinationTable <a name="BigqueryJobLoadDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobLoadDestinationTable {
	TableId: *string,
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId">TableId</a></code> | <code>*string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#table_id BigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoadTimePartitioning <a name="BigqueryJobLoadTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobLoadTimePartitioning {
	Type: *string,
	ExpirationMs: *string,
	Field: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type">Type</a></code> | <code>*string</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs">ExpirationMs</a></code> | <code>*string</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field">Field</a></code> | <code>*string</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type"></a>

```go
Type *string
```

- *Type:* *string

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#type BigqueryJob#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```go
ExpirationMs *string
```

- *Type:* *string

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#expiration_ms BigqueryJob#expiration_ms}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field"></a>

```go
Field *string
```

- *Type:* *string

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#field BigqueryJob#field}

---

### BigqueryJobQuery <a name="BigqueryJobQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQuery {
	Query: *string,
	AllowLargeResults: interface{},
	CreateDisposition: *string,
	DefaultDataset: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobQueryDefaultDataset,
	DestinationEncryptionConfiguration: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration,
	DestinationTable: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobQueryDestinationTable,
	FlattenResults: interface{},
	MaximumBillingTier: *f64,
	MaximumBytesBilled: *string,
	ParameterMode: *string,
	Priority: *string,
	SchemaUpdateOptions: *[]*string,
	ScriptOptions: github.com/cdktf/cdktf-provider-google-go/google.bigqueryJob.BigqueryJobQueryScriptOptions,
	UseLegacySql: interface{},
	UseQueryCache: interface{},
	UserDefinedFunctionResources: interface{},
	WriteDisposition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query">Query</a></code> | <code>*string</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults">AllowLargeResults</a></code> | <code>interface{}</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset">DefaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults">FlattenResults</a></code> | <code>interface{}</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier">MaximumBillingTier</a></code> | <code>*f64</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled">MaximumBytesBilled</a></code> | <code>*string</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority">Priority</a></code> | <code>*string</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>*[]*string</code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions">ScriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql">UseLegacySql</a></code> | <code>interface{}</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache">UseQueryCache</a></code> | <code>interface{}</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources">UserDefinedFunctionResources</a></code> | <code>interface{}</code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#query BigqueryJob#query}

---

##### `AllowLargeResults`<sup>Optional</sup> <a name="AllowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults"></a>

```go
AllowLargeResults interface{}
```

- *Type:* interface{}

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#allow_large_results BigqueryJob#allow_large_results}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition"></a>

```go
CreateDisposition *string
```

- *Type:* *string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `DefaultDataset`<sup>Optional</sup> <a name="DefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset"></a>

```go
DefaultDataset BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#default_dataset BigqueryJob#default_dataset}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```go
DestinationEncryptionConfiguration BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable"></a>

```go
DestinationTable BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `FlattenResults`<sup>Optional</sup> <a name="FlattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults"></a>

```go
FlattenResults interface{}
```

- *Type:* interface{}

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#flatten_results BigqueryJob#flatten_results}

---

##### `MaximumBillingTier`<sup>Optional</sup> <a name="MaximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier"></a>

```go
MaximumBillingTier *f64
```

- *Type:* *f64

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#maximum_billing_tier BigqueryJob#maximum_billing_tier}

---

##### `MaximumBytesBilled`<sup>Optional</sup> <a name="MaximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled"></a>

```go
MaximumBytesBilled *string
```

- *Type:* *string

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}

---

##### `ParameterMode`<sup>Optional</sup> <a name="ParameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode"></a>

```go
ParameterMode *string
```

- *Type:* *string

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#parameter_mode BigqueryJob#parameter_mode}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#priority BigqueryJob#priority}

---

##### `SchemaUpdateOptions`<sup>Optional</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions"></a>

```go
SchemaUpdateOptions *[]*string
```

- *Type:* *[]*string

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `ScriptOptions`<sup>Optional</sup> <a name="ScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions"></a>

```go
ScriptOptions BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#script_options BigqueryJob#script_options}

---

##### `UseLegacySql`<sup>Optional</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql"></a>

```go
UseLegacySql interface{}
```

- *Type:* interface{}

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#use_legacy_sql BigqueryJob#use_legacy_sql}

---

##### `UseQueryCache`<sup>Optional</sup> <a name="UseQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache"></a>

```go
UseQueryCache interface{}
```

- *Type:* interface{}

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#use_query_cache BigqueryJob#use_query_cache}

---

##### `UserDefinedFunctionResources`<sup>Optional</sup> <a name="UserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources"></a>

```go
UserDefinedFunctionResources interface{}
```

- *Type:* interface{}

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#user_defined_function_resources BigqueryJob#user_defined_function_resources}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition"></a>

```go
WriteDisposition *string
```

- *Type:* *string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobQueryDefaultDataset <a name="BigqueryJobQueryDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQueryDefaultDataset {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryDestinationEncryptionConfiguration <a name="BigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQueryDestinationEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobQueryDestinationTable <a name="BigqueryJobQueryDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQueryDestinationTable {
	TableId: *string,
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId">TableId</a></code> | <code>*string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#table_id BigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryScriptOptions <a name="BigqueryJobQueryScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQueryScriptOptions {
	KeyResultStatement: *string,
	StatementByteBudget: *string,
	StatementTimeoutMs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement">KeyResultStatement</a></code> | <code>*string</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget">StatementByteBudget</a></code> | <code>*string</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs">StatementTimeoutMs</a></code> | <code>*string</code> | Timeout period for each statement in a script. |

---

##### `KeyResultStatement`<sup>Optional</sup> <a name="KeyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```go
KeyResultStatement *string
```

- *Type:* *string

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#key_result_statement BigqueryJob#key_result_statement}

---

##### `StatementByteBudget`<sup>Optional</sup> <a name="StatementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```go
StatementByteBudget *string
```

- *Type:* *string

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#statement_byte_budget BigqueryJob#statement_byte_budget}

---

##### `StatementTimeoutMs`<sup>Optional</sup> <a name="StatementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```go
StatementTimeoutMs *string
```

- *Type:* *string

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#statement_timeout_ms BigqueryJob#statement_timeout_ms}

---

### BigqueryJobQueryUserDefinedFunctionResources <a name="BigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobQueryUserDefinedFunctionResources {
	InlineCode: *string,
	ResourceUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">InlineCode</a></code> | <code>*string</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `InlineCode`<sup>Optional</sup> <a name="InlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```go
InlineCode *string
```

- *Type:* *string

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#inline_code BigqueryJob#inline_code}

---

##### `ResourceUri`<sup>Optional</sup> <a name="ResourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```go
ResourceUri *string
```

- *Type:* *string

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#resource_uri BigqueryJob#resource_uri}

---

### BigqueryJobStatus <a name="BigqueryJobStatus" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobStatus {

}
```


### BigqueryJobStatusErrorResult <a name="BigqueryJobStatusErrorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobStatusErrorResult {

}
```


### BigqueryJobStatusErrors <a name="BigqueryJobStatusErrors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobStatusErrors {

}
```


### BigqueryJobTimeouts <a name="BigqueryJobTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

&bigqueryjob.BigqueryJobTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#create BigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#delete BigqueryJob#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#create BigqueryJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job#delete BigqueryJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobCopyDestinationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobCopyDestinationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### BigqueryJobCopyDestinationTableOutputReference <a name="BigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobCopyDestinationTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobCopyDestinationTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---


### BigqueryJobCopyOutputReference <a name="BigqueryJobCopyOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobCopyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobCopyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables">PutSourceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```go
func PutDestinationEncryptionConfiguration(value BigqueryJobCopyDestinationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable"></a>

```go
func PutDestinationTable(value BigqueryJobCopyDestinationTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `PutSourceTables` <a name="PutSourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables"></a>

```go
func PutSourceTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```go
func ResetCreateDisposition()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```go
func ResetDestinationEncryptionConfiguration()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable"></a>

```go
func ResetDestinationTable()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```go
func ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables">SourceTables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput">SourceTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```go
func DestinationEncryptionConfiguration() BigqueryJobCopyDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable"></a>

```go
func DestinationTable() BigqueryJobCopyDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a>

---

##### `SourceTables`<sup>Required</sup> <a name="SourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables"></a>

```go
func SourceTables() BigqueryJobCopySourceTablesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a>

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```go
func CreateDispositionInput() *string
```

- *Type:* *string

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```go
func DestinationEncryptionConfigurationInput() BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `SourceTablesInput`<sup>Optional</sup> <a name="SourceTablesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```go
func SourceTablesInput() interface{}
```

- *Type:* interface{}

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```go
func WriteDispositionInput() *string
```

- *Type:* *string

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition"></a>

```go
func CreateDisposition() *string
```

- *Type:* *string

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition"></a>

```go
func WriteDisposition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---


### BigqueryJobCopySourceTablesList <a name="BigqueryJobCopySourceTablesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobCopySourceTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryJobCopySourceTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get"></a>

```go
func Get(index *f64) BigqueryJobCopySourceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryJobCopySourceTablesOutputReference <a name="BigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobCopySourceTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryJobCopySourceTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryJobExtractOutputReference <a name="BigqueryJobExtractOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobExtractOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobExtractOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel">PutSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable">PutSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat">ResetDestinationFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader">ResetPrintHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel">ResetSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">ResetUseAvroLogicalTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceModel` <a name="PutSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel"></a>

```go
func PutSourceModel(value BigqueryJobExtractSourceModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `PutSourceTable` <a name="PutSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable"></a>

```go
func PutSourceTable(value BigqueryJobExtractSourceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDestinationFormat` <a name="ResetDestinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```go
func ResetDestinationFormat()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetPrintHeader` <a name="ResetPrintHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader"></a>

```go
func ResetPrintHeader()
```

##### `ResetSourceModel` <a name="ResetSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel"></a>

```go
func ResetSourceModel()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable"></a>

```go
func ResetSourceTable()
```

##### `ResetUseAvroLogicalTypes` <a name="ResetUseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```go
func ResetUseAvroLogicalTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel">SourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable">SourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput">DestinationFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput">DestinationUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput">PrintHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput">SourceModelInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">UseAvroLogicalTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat">DestinationFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris">DestinationUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader">PrintHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceModel`<sup>Required</sup> <a name="SourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel"></a>

```go
func SourceModel() BigqueryJobExtractSourceModelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a>

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable"></a>

```go
func SourceTable() BigqueryJobExtractSourceTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DestinationFormatInput`<sup>Optional</sup> <a name="DestinationFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```go
func DestinationFormatInput() *string
```

- *Type:* *string

---

##### `DestinationUrisInput`<sup>Optional</sup> <a name="DestinationUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```go
func DestinationUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `PrintHeaderInput`<sup>Optional</sup> <a name="PrintHeaderInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```go
func PrintHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `SourceModelInput`<sup>Optional</sup> <a name="SourceModelInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```go
func SourceModelInput() BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```go
func SourceTableInput() BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `UseAvroLogicalTypesInput`<sup>Optional</sup> <a name="UseAvroLogicalTypesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```go
func UseAvroLogicalTypesInput() interface{}
```

- *Type:* interface{}

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DestinationFormat`<sup>Required</sup> <a name="DestinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat"></a>

```go
func DestinationFormat() *string
```

- *Type:* *string

---

##### `DestinationUris`<sup>Required</sup> <a name="DestinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris"></a>

```go
func DestinationUris() *[]*string
```

- *Type:* *[]*string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `PrintHeader`<sup>Required</sup> <a name="PrintHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader"></a>

```go
func PrintHeader() interface{}
```

- *Type:* interface{}

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```go
func UseAvroLogicalTypes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---


### BigqueryJobExtractSourceModelOutputReference <a name="BigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobExtractSourceModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobExtractSourceModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---


### BigqueryJobExtractSourceTableOutputReference <a name="BigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobExtractSourceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobExtractSourceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---


### BigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobLoadDestinationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobLoadDestinationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### BigqueryJobLoadDestinationTableOutputReference <a name="BigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobLoadDestinationTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobLoadDestinationTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---


### BigqueryJobLoadOutputReference <a name="BigqueryJobLoadOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobLoadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobLoadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning">PutTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows">ResetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines">ResetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect">ResetAutodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues">ResetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension">ResetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords">ResetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker">ResetNullMarker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields">ResetProjectionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote">ResetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions">ResetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning">ResetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```go
func PutDestinationEncryptionConfiguration(value BigqueryJobLoadDestinationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable"></a>

```go
func PutDestinationTable(value BigqueryJobLoadDestinationTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `PutTimePartitioning` <a name="PutTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning"></a>

```go
func PutTimePartitioning(value BigqueryJobLoadTimePartitioning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `ResetAllowJaggedRows` <a name="ResetAllowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```go
func ResetAllowJaggedRows()
```

##### `ResetAllowQuotedNewlines` <a name="ResetAllowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```go
func ResetAllowQuotedNewlines()
```

##### `ResetAutodetect` <a name="ResetAutodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect"></a>

```go
func ResetAutodetect()
```

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```go
func ResetCreateDisposition()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```go
func ResetDestinationEncryptionConfiguration()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetIgnoreUnknownValues` <a name="ResetIgnoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```go
func ResetIgnoreUnknownValues()
```

##### `ResetJsonExtension` <a name="ResetJsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension"></a>

```go
func ResetJsonExtension()
```

##### `ResetMaxBadRecords` <a name="ResetMaxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```go
func ResetMaxBadRecords()
```

##### `ResetNullMarker` <a name="ResetNullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker"></a>

```go
func ResetNullMarker()
```

##### `ResetProjectionFields` <a name="ResetProjectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields"></a>

```go
func ResetProjectionFields()
```

##### `ResetQuote` <a name="ResetQuote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote"></a>

```go
func ResetQuote()
```

##### `ResetSchemaUpdateOptions` <a name="ResetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```go
func ResetSchemaUpdateOptions()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```go
func ResetSkipLeadingRows()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat"></a>

```go
func ResetSourceFormat()
```

##### `ResetTimePartitioning` <a name="ResetTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```go
func ResetTimePartitioning()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```go
func ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput">AllowJaggedRowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">AllowQuotedNewlinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput">AutodetectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">IgnoreUnknownValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput">JsonExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput">MaxBadRecordsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput">NullMarkerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput">ProjectionFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput">QuoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">SchemaUpdateOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput">SourceUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput">TimePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect">Autodetect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker">NullMarker</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields">ProjectionFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote">Quote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris">SourceUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```go
func DestinationEncryptionConfiguration() BigqueryJobLoadDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable"></a>

```go
func DestinationTable() BigqueryJobLoadDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a>

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning"></a>

```go
func TimePartitioning() BigqueryJobLoadTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `AllowJaggedRowsInput`<sup>Optional</sup> <a name="AllowJaggedRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```go
func AllowJaggedRowsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowQuotedNewlinesInput`<sup>Optional</sup> <a name="AllowQuotedNewlinesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```go
func AllowQuotedNewlinesInput() interface{}
```

- *Type:* interface{}

---

##### `AutodetectInput`<sup>Optional</sup> <a name="AutodetectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput"></a>

```go
func AutodetectInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```go
func CreateDispositionInput() *string
```

- *Type:* *string

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```go
func DestinationEncryptionConfigurationInput() BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `IgnoreUnknownValuesInput`<sup>Optional</sup> <a name="IgnoreUnknownValuesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```go
func IgnoreUnknownValuesInput() interface{}
```

- *Type:* interface{}

---

##### `JsonExtensionInput`<sup>Optional</sup> <a name="JsonExtensionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```go
func JsonExtensionInput() *string
```

- *Type:* *string

---

##### `MaxBadRecordsInput`<sup>Optional</sup> <a name="MaxBadRecordsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```go
func MaxBadRecordsInput() *f64
```

- *Type:* *f64

---

##### `NullMarkerInput`<sup>Optional</sup> <a name="NullMarkerInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```go
func NullMarkerInput() *string
```

- *Type:* *string

---

##### `ProjectionFieldsInput`<sup>Optional</sup> <a name="ProjectionFieldsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```go
func ProjectionFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput"></a>

```go
func QuoteInput() *string
```

- *Type:* *string

---

##### `SchemaUpdateOptionsInput`<sup>Optional</sup> <a name="SchemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```go
func SchemaUpdateOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```go
func SkipLeadingRowsInput() *f64
```

- *Type:* *f64

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```go
func SourceFormatInput() *string
```

- *Type:* *string

---

##### `SourceUrisInput`<sup>Optional</sup> <a name="SourceUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```go
func SourceUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimePartitioningInput`<sup>Optional</sup> <a name="TimePartitioningInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```go
func TimePartitioningInput() BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```go
func WriteDispositionInput() *string
```

- *Type:* *string

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```go
func AllowJaggedRows() interface{}
```

- *Type:* interface{}

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```go
func AllowQuotedNewlines() interface{}
```

- *Type:* interface{}

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect"></a>

```go
func Autodetect() interface{}
```

- *Type:* interface{}

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition"></a>

```go
func CreateDisposition() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```go
func IgnoreUnknownValues() interface{}
```

- *Type:* interface{}

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension"></a>

```go
func JsonExtension() *string
```

- *Type:* *string

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```go
func MaxBadRecords() *f64
```

- *Type:* *f64

---

##### `NullMarker`<sup>Required</sup> <a name="NullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker"></a>

```go
func NullMarker() *string
```

- *Type:* *string

---

##### `ProjectionFields`<sup>Required</sup> <a name="ProjectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields"></a>

```go
func ProjectionFields() *[]*string
```

- *Type:* *[]*string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote"></a>

```go
func Quote() *string
```

- *Type:* *string

---

##### `SchemaUpdateOptions`<sup>Required</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```go
func SchemaUpdateOptions() *[]*string
```

- *Type:* *[]*string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```go
func SkipLeadingRows() *f64
```

- *Type:* *f64

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris"></a>

```go
func SourceUris() *[]*string
```

- *Type:* *[]*string

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition"></a>

```go
func WriteDisposition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---


### BigqueryJobLoadTimePartitioningOutputReference <a name="BigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobLoadTimePartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobLoadTimePartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```go
func ResetExpirationMs()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```go
func ExpirationMsInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```go
func ExpirationMs() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---


### BigqueryJobQueryDefaultDatasetOutputReference <a name="BigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryDefaultDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobQueryDefaultDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---


### BigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryDestinationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobQueryDestinationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### BigqueryJobQueryDestinationTableOutputReference <a name="BigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryDestinationTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobQueryDestinationTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---


### BigqueryJobQueryOutputReference <a name="BigqueryJobQueryOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset">PutDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions">PutScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources">PutUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults">ResetAllowLargeResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset">ResetDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults">ResetFlattenResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier">ResetMaximumBillingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled">ResetMaximumBytesBilled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode">ResetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions">ResetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions">ResetScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql">ResetUseLegacySql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache">ResetUseQueryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">ResetUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultDataset` <a name="PutDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset"></a>

```go
func PutDefaultDataset(value BigqueryJobQueryDefaultDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```go
func PutDestinationEncryptionConfiguration(value BigqueryJobQueryDestinationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable"></a>

```go
func PutDestinationTable(value BigqueryJobQueryDestinationTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `PutScriptOptions` <a name="PutScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions"></a>

```go
func PutScriptOptions(value BigqueryJobQueryScriptOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `PutUserDefinedFunctionResources` <a name="PutUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```go
func PutUserDefinedFunctionResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowLargeResults` <a name="ResetAllowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```go
func ResetAllowLargeResults()
```

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```go
func ResetCreateDisposition()
```

##### `ResetDefaultDataset` <a name="ResetDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```go
func ResetDefaultDataset()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```go
func ResetDestinationEncryptionConfiguration()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable"></a>

```go
func ResetDestinationTable()
```

##### `ResetFlattenResults` <a name="ResetFlattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults"></a>

```go
func ResetFlattenResults()
```

##### `ResetMaximumBillingTier` <a name="ResetMaximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```go
func ResetMaximumBillingTier()
```

##### `ResetMaximumBytesBilled` <a name="ResetMaximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```go
func ResetMaximumBytesBilled()
```

##### `ResetParameterMode` <a name="ResetParameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode"></a>

```go
func ResetParameterMode()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSchemaUpdateOptions` <a name="ResetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```go
func ResetSchemaUpdateOptions()
```

##### `ResetScriptOptions` <a name="ResetScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions"></a>

```go
func ResetScriptOptions()
```

##### `ResetUseLegacySql` <a name="ResetUseLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```go
func ResetUseLegacySql()
```

##### `ResetUseQueryCache` <a name="ResetUseQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```go
func ResetUseQueryCache()
```

##### `ResetUserDefinedFunctionResources` <a name="ResetUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```go
func ResetUserDefinedFunctionResources()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```go
func ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset">DefaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions">ScriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources">UserDefinedFunctionResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput">AllowLargeResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput">DefaultDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput">FlattenResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput">MaximumBillingTierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput">MaximumBytesBilledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput">ParameterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">SchemaUpdateOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput">ScriptOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput">UseLegacySqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput">UseQueryCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">UserDefinedFunctionResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults">AllowLargeResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults">FlattenResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier">MaximumBillingTier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled">MaximumBytesBilled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache">UseQueryCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultDataset`<sup>Required</sup> <a name="DefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset"></a>

```go
func DefaultDataset() BigqueryJobQueryDefaultDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```go
func DestinationEncryptionConfiguration() BigqueryJobQueryDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable"></a>

```go
func DestinationTable() BigqueryJobQueryDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a>

---

##### `ScriptOptions`<sup>Required</sup> <a name="ScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions"></a>

```go
func ScriptOptions() BigqueryJobQueryScriptOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `UserDefinedFunctionResources`<sup>Required</sup> <a name="UserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```go
func UserDefinedFunctionResources() BigqueryJobQueryUserDefinedFunctionResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `AllowLargeResultsInput`<sup>Optional</sup> <a name="AllowLargeResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```go
func AllowLargeResultsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```go
func CreateDispositionInput() *string
```

- *Type:* *string

---

##### `DefaultDatasetInput`<sup>Optional</sup> <a name="DefaultDatasetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```go
func DefaultDatasetInput() BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```go
func DestinationEncryptionConfigurationInput() BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `FlattenResultsInput`<sup>Optional</sup> <a name="FlattenResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```go
func FlattenResultsInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumBillingTierInput`<sup>Optional</sup> <a name="MaximumBillingTierInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```go
func MaximumBillingTierInput() *f64
```

- *Type:* *f64

---

##### `MaximumBytesBilledInput`<sup>Optional</sup> <a name="MaximumBytesBilledInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```go
func MaximumBytesBilledInput() *string
```

- *Type:* *string

---

##### `ParameterModeInput`<sup>Optional</sup> <a name="ParameterModeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```go
func ParameterModeInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `SchemaUpdateOptionsInput`<sup>Optional</sup> <a name="SchemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```go
func SchemaUpdateOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptOptionsInput`<sup>Optional</sup> <a name="ScriptOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```go
func ScriptOptionsInput() BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `UseLegacySqlInput`<sup>Optional</sup> <a name="UseLegacySqlInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```go
func UseLegacySqlInput() interface{}
```

- *Type:* interface{}

---

##### `UseQueryCacheInput`<sup>Optional</sup> <a name="UseQueryCacheInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```go
func UseQueryCacheInput() interface{}
```

- *Type:* interface{}

---

##### `UserDefinedFunctionResourcesInput`<sup>Optional</sup> <a name="UserDefinedFunctionResourcesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```go
func UserDefinedFunctionResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```go
func WriteDispositionInput() *string
```

- *Type:* *string

---

##### `AllowLargeResults`<sup>Required</sup> <a name="AllowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```go
func AllowLargeResults() interface{}
```

- *Type:* interface{}

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition"></a>

```go
func CreateDisposition() *string
```

- *Type:* *string

---

##### `FlattenResults`<sup>Required</sup> <a name="FlattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults"></a>

```go
func FlattenResults() interface{}
```

- *Type:* interface{}

---

##### `MaximumBillingTier`<sup>Required</sup> <a name="MaximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```go
func MaximumBillingTier() *f64
```

- *Type:* *f64

---

##### `MaximumBytesBilled`<sup>Required</sup> <a name="MaximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```go
func MaximumBytesBilled() *string
```

- *Type:* *string

---

##### `ParameterMode`<sup>Required</sup> <a name="ParameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode"></a>

```go
func ParameterMode() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `SchemaUpdateOptions`<sup>Required</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```go
func SchemaUpdateOptions() *[]*string
```

- *Type:* *[]*string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql"></a>

```go
func UseLegacySql() interface{}
```

- *Type:* interface{}

---

##### `UseQueryCache`<sup>Required</sup> <a name="UseQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache"></a>

```go
func UseQueryCache() interface{}
```

- *Type:* interface{}

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition"></a>

```go
func WriteDisposition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---


### BigqueryJobQueryScriptOptionsOutputReference <a name="BigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryScriptOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobQueryScriptOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">ResetKeyResultStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">ResetStatementByteBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">ResetStatementTimeoutMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyResultStatement` <a name="ResetKeyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```go
func ResetKeyResultStatement()
```

##### `ResetStatementByteBudget` <a name="ResetStatementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```go
func ResetStatementByteBudget()
```

##### `ResetStatementTimeoutMs` <a name="ResetStatementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```go
func ResetStatementTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">KeyResultStatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">StatementByteBudgetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">StatementTimeoutMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">KeyResultStatement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">StatementByteBudget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">StatementTimeoutMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyResultStatementInput`<sup>Optional</sup> <a name="KeyResultStatementInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```go
func KeyResultStatementInput() *string
```

- *Type:* *string

---

##### `StatementByteBudgetInput`<sup>Optional</sup> <a name="StatementByteBudgetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```go
func StatementByteBudgetInput() *string
```

- *Type:* *string

---

##### `StatementTimeoutMsInput`<sup>Optional</sup> <a name="StatementTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```go
func StatementTimeoutMsInput() *string
```

- *Type:* *string

---

##### `KeyResultStatement`<sup>Required</sup> <a name="KeyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```go
func KeyResultStatement() *string
```

- *Type:* *string

---

##### `StatementByteBudget`<sup>Required</sup> <a name="StatementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```go
func StatementByteBudget() *string
```

- *Type:* *string

---

##### `StatementTimeoutMs`<sup>Required</sup> <a name="StatementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```go
func StatementTimeoutMs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---


### BigqueryJobQueryUserDefinedFunctionResourcesList <a name="BigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryUserDefinedFunctionResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryJobQueryUserDefinedFunctionResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```go
func Get(index *f64) BigqueryJobQueryUserDefinedFunctionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="BigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobQueryUserDefinedFunctionResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryJobQueryUserDefinedFunctionResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">ResetInlineCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">ResetResourceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInlineCode` <a name="ResetInlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```go
func ResetInlineCode()
```

##### `ResetResourceUri` <a name="ResetResourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```go
func ResetResourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">InlineCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">ResourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">InlineCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineCodeInput`<sup>Optional</sup> <a name="InlineCodeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```go
func InlineCodeInput() *string
```

- *Type:* *string

---

##### `ResourceUriInput`<sup>Optional</sup> <a name="ResourceUriInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```go
func ResourceUriInput() *string
```

- *Type:* *string

---

##### `InlineCode`<sup>Required</sup> <a name="InlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```go
func InlineCode() *string
```

- *Type:* *string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```go
func ResourceUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryJobStatusErrorResultList <a name="BigqueryJobStatusErrorResultList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusErrorResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryJobStatusErrorResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get"></a>

```go
func Get(index *f64) BigqueryJobStatusErrorResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryJobStatusErrorResultOutputReference <a name="BigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusErrorResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryJobStatusErrorResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobStatusErrorResult
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a>

---


### BigqueryJobStatusErrorsList <a name="BigqueryJobStatusErrorsList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryJobStatusErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get"></a>

```go
func Get(index *f64) BigqueryJobStatusErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryJobStatusErrorsOutputReference <a name="BigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryJobStatusErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobStatusErrors
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a>

---


### BigqueryJobStatusList <a name="BigqueryJobStatusList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryJobStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get"></a>

```go
func Get(index *f64) BigqueryJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryJobStatusOutputReference <a name="BigqueryJobStatusOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryJobStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult">ErrorResult</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorResult`<sup>Required</sup> <a name="ErrorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult"></a>

```go
func ErrorResult() BigqueryJobStatusErrorResultList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors"></a>

```go
func Errors() BigqueryJobStatusErrorsList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryJobStatus
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a>

---


### BigqueryJobTimeoutsOutputReference <a name="BigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryjob"

bigqueryjob.NewBigqueryJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



