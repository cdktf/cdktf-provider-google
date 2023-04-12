# `dataflowJob` Submodule <a name="`dataflowJob` Submodule" id="@cdktf/provider-google.dataflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowJob <a name="DataflowJob" id="@cdktf/provider-google.dataflowJob.DataflowJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataflow_job google_dataflow_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

dataflowjob.NewDataflowJob(scope Construct, id *string, config DataflowJobConfig) DataflowJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig">DataflowJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataflowJob.DataflowJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig">DataflowJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataflowJob.DataflowJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataflowJob.DataflowJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataflowJob.DataflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataflowJob.DataflowJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataflowJob.DataflowJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts"></a>

```go
func PutTimeouts(value DataflowJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataflowJob.DataflowJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>

---

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetSkipWaitOnJobTermination"></a>

```go
func ResetSkipWaitOnJobTermination()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataflowJob.DataflowJob.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

dataflowjob.DataflowJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

dataflowjob.DataflowJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

dataflowjob.DataflowJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataflowJob.DataflowJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference">DataflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocationInput">TempGcsLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPathInput">TemplateGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocation">TempGcsLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPath">TemplateGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.timeouts"></a>

```go
func Timeouts() DataflowJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference">DataflowJobTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTerminationInput"></a>

```go
func SkipWaitOnJobTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempGcsLocationInput`<sup>Optional</sup> <a name="TempGcsLocationInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocationInput"></a>

```go
func TempGcsLocationInput() *string
```

- *Type:* *string

---

##### `TemplateGcsPathInput`<sup>Optional</sup> <a name="TemplateGcsPathInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPathInput"></a>

```go
func TemplateGcsPathInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.skipWaitOnJobTermination"></a>

```go
func SkipWaitOnJobTermination() interface{}
```

- *Type:* interface{}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempGcsLocation`<sup>Required</sup> <a name="TempGcsLocation" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tempGcsLocation"></a>

```go
func TempGcsLocation() *string
```

- *Type:* *string

---

##### `TemplateGcsPath`<sup>Required</sup> <a name="TemplateGcsPath" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.templateGcsPath"></a>

```go
func TemplateGcsPath() *string
```

- *Type:* *string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataflowJob.DataflowJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowJobConfig <a name="DataflowJobConfig" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

&dataflowjob.DataflowJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TempGcsLocation: *string,
	TemplateGcsPath: *string,
	AdditionalExperiments: *[]*string,
	EnableStreamingEngine: interface{},
	Id: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	OnDelete: *string,
	Parameters: *map[string]*string,
	Project: *string,
	Region: *string,
	ServiceAccountEmail: *string,
	SkipWaitOnJobTermination: interface{},
	Subnetwork: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataflowJob.DataflowJobTimeouts,
	TransformNameMapping: *map[string]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.tempGcsLocation">TempGcsLocation</a></code> | <code>*string</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.templateGcsPath">TemplateGcsPath</a></code> | <code>*string</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#id DataflowJob#id}. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.network">Network</a></code> | <code>*string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.onDelete">OnDelete</a></code> | <code>*string</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.region">Region</a></code> | <code>*string</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#name DataflowJob#name}

---

##### `TempGcsLocation`<sup>Required</sup> <a name="TempGcsLocation" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.tempGcsLocation"></a>

```go
TempGcsLocation *string
```

- *Type:* *string

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#temp_gcs_location DataflowJob#temp_gcs_location}

---

##### `TemplateGcsPath`<sup>Required</sup> <a name="TemplateGcsPath" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.templateGcsPath"></a>

```go
TemplateGcsPath *string
```

- *Type:* *string

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#template_gcs_path DataflowJob#template_gcs_path}

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#additional_experiments DataflowJob#additional_experiments}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#enable_streaming_engine DataflowJob#enable_streaming_engine}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#id DataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#ip_configuration DataflowJob#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#kms_key_name DataflowJob#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: Google-provided Dataflow templates often provide default labels that begin with goog-dataflow-provided. Unless explicitly set in config, these labels will be ignored to prevent diffs on re-apply.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#labels DataflowJob#labels}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#machine_type DataflowJob#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#max_workers DataflowJob#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#network DataflowJob#network}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#on_delete DataflowJob#on_delete}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#parameters DataflowJob#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#project DataflowJob#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#region DataflowJob#region}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#service_account_email DataflowJob#service_account_email}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.skipWaitOnJobTermination"></a>

```go
SkipWaitOnJobTermination interface{}
```

- *Type:* interface{}

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#skip_wait_on_job_termination DataflowJob#skip_wait_on_job_termination}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#subnetwork DataflowJob#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.timeouts"></a>

```go
Timeouts DataflowJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts">DataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#timeouts DataflowJob#timeouts}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#transform_name_mapping DataflowJob#transform_name_mapping}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataflowJob.DataflowJobConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#zone DataflowJob#zone}

---

### DataflowJobTimeouts <a name="DataflowJobTimeouts" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

&dataflowjob.DataflowJobTimeouts {
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#update DataflowJob#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataflow_job#update DataflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowJobTimeoutsOutputReference <a name="DataflowJobTimeoutsOutputReference" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataflowjob"

dataflowjob.NewDataflowJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataflowJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataflowJob.DataflowJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



