# `dataprocJob` Submodule <a name="`dataprocJob` Submodule" id="@cdktf/provider-google.dataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocJob <a name="DataprocJob" id="@cdktf/provider-google.dataprocJob.DataprocJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJob(scope Construct, id *string, config DataprocJobConfig) DataprocJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig">DataprocJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocJob.DataprocJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig">DataprocJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig">PutHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig">PutHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig">PutPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig">PutPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig">PutPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putReference">PutReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig">PutSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig">PutSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig">ResetHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig">ResetHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig">ResetPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig">ResetPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig">ResetPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig">ResetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig">ResetSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocJob.DataprocJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHadoopConfig` <a name="PutHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig"></a>

```go
func PutHadoopConfig(value DataprocJobHadoopConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHadoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `PutHiveConfig` <a name="PutHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig"></a>

```go
func PutHiveConfig(value DataprocJobHiveConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putHiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `PutPigConfig` <a name="PutPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig"></a>

```go
func PutPigConfig(value DataprocJobPigConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPigConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement"></a>

```go
func PutPlacement(value DataprocJobPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `PutPrestoConfig` <a name="PutPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig"></a>

```go
func PutPrestoConfig(value DataprocJobPrestoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPrestoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `PutPysparkConfig` <a name="PutPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig"></a>

```go
func PutPysparkConfig(value DataprocJobPysparkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putPysparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `PutReference` <a name="PutReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference"></a>

```go
func PutReference(value DataprocJobReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling"></a>

```go
func PutScheduling(value DataprocJobScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `PutSparkConfig` <a name="PutSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig"></a>

```go
func PutSparkConfig(value DataprocJobSparkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `PutSparksqlConfig` <a name="PutSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig"></a>

```go
func PutSparksqlConfig(value DataprocJobSparksqlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putSparksqlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts"></a>

```go
func PutTimeouts(value DataprocJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

---

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetHadoopConfig` <a name="ResetHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHadoopConfig"></a>

```go
func ResetHadoopConfig()
```

##### `ResetHiveConfig` <a name="ResetHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetHiveConfig"></a>

```go
func ResetHiveConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPigConfig` <a name="ResetPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPigConfig"></a>

```go
func ResetPigConfig()
```

##### `ResetPrestoConfig` <a name="ResetPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPrestoConfig"></a>

```go
func ResetPrestoConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPysparkConfig` <a name="ResetPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetPysparkConfig"></a>

```go
func ResetPysparkConfig()
```

##### `ResetReference` <a name="ResetReference" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetReference"></a>

```go
func ResetReference()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetScheduling"></a>

```go
func ResetScheduling()
```

##### `ResetSparkConfig` <a name="ResetSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparkConfig"></a>

```go
func ResetSparkConfig()
```

##### `ResetSparksqlConfig` <a name="ResetSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetSparksqlConfig"></a>

```go
func ResetSparksqlConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.DataprocJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.DataprocJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.DataprocJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocJob.DataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri">DriverControlsFilesUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri">DriverOutputResourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig">HadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig">HiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig">PigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig">PrestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig">PysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.reference">Reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig">SparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput">HadoopConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput">HiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput">PigConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput">PrestoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput">PysparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput">ReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput">SparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput">SparksqlConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DriverControlsFilesUri`<sup>Required</sup> <a name="DriverControlsFilesUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverControlsFilesUri"></a>

```go
func DriverControlsFilesUri() *string
```

- *Type:* *string

---

##### `DriverOutputResourceUri`<sup>Required</sup> <a name="DriverOutputResourceUri" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.driverOutputResourceUri"></a>

```go
func DriverOutputResourceUri() *string
```

- *Type:* *string

---

##### `HadoopConfig`<sup>Required</sup> <a name="HadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfig"></a>

```go
func HadoopConfig() DataprocJobHadoopConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference">DataprocJobHadoopConfigOutputReference</a>

---

##### `HiveConfig`<sup>Required</sup> <a name="HiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfig"></a>

```go
func HiveConfig() DataprocJobHiveConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference">DataprocJobHiveConfigOutputReference</a>

---

##### `PigConfig`<sup>Required</sup> <a name="PigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfig"></a>

```go
func PigConfig() DataprocJobPigConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference">DataprocJobPigConfigOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placement"></a>

```go
func Placement() DataprocJobPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference">DataprocJobPlacementOutputReference</a>

---

##### `PrestoConfig`<sup>Required</sup> <a name="PrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfig"></a>

```go
func PrestoConfig() DataprocJobPrestoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference">DataprocJobPrestoConfigOutputReference</a>

---

##### `PysparkConfig`<sup>Required</sup> <a name="PysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfig"></a>

```go
func PysparkConfig() DataprocJobPysparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference">DataprocJobPysparkConfigOutputReference</a>

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.reference"></a>

```go
func Reference() DataprocJobReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference">DataprocJobReferenceOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.scheduling"></a>

```go
func Scheduling() DataprocJobSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference">DataprocJobSchedulingOutputReference</a>

---

##### `SparkConfig`<sup>Required</sup> <a name="SparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfig"></a>

```go
func SparkConfig() DataprocJobSparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference">DataprocJobSparkConfigOutputReference</a>

---

##### `SparksqlConfig`<sup>Required</sup> <a name="SparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfig"></a>

```go
func SparksqlConfig() DataprocJobSparksqlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference">DataprocJobSparksqlConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.status"></a>

```go
func Status() DataprocJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList">DataprocJobStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeouts"></a>

```go
func Timeouts() DataprocJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference">DataprocJobTimeoutsOutputReference</a>

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `HadoopConfigInput`<sup>Optional</sup> <a name="HadoopConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hadoopConfigInput"></a>

```go
func HadoopConfigInput() DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---

##### `HiveConfigInput`<sup>Optional</sup> <a name="HiveConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.hiveConfigInput"></a>

```go
func HiveConfigInput() DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PigConfigInput`<sup>Optional</sup> <a name="PigConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pigConfigInput"></a>

```go
func PigConfigInput() DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.placementInput"></a>

```go
func PlacementInput() DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---

##### `PrestoConfigInput`<sup>Optional</sup> <a name="PrestoConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.prestoConfigInput"></a>

```go
func PrestoConfigInput() DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PysparkConfigInput`<sup>Optional</sup> <a name="PysparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.pysparkConfigInput"></a>

```go
func PysparkConfigInput() DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.referenceInput"></a>

```go
func ReferenceInput() DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.schedulingInput"></a>

```go
func SchedulingInput() DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---

##### `SparkConfigInput`<sup>Optional</sup> <a name="SparkConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparkConfigInput"></a>

```go
func SparkConfigInput() DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---

##### `SparksqlConfigInput`<sup>Optional</sup> <a name="SparksqlConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.sparksqlConfigInput"></a>

```go
func SparksqlConfigInput() DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocJob.DataprocJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocJobConfig <a name="DataprocJobConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Placement: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPlacement,
	ForceDelete: interface{},
	HadoopConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobHadoopConfig,
	HiveConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobHiveConfig,
	Id: *string,
	Labels: *map[string]*string,
	PigConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPigConfig,
	PrestoConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPrestoConfig,
	Project: *string,
	PysparkConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPysparkConfig,
	Reference: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobReference,
	Region: *string,
	Scheduling: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobScheduling,
	SparkConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobSparkConfig,
	SparksqlConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobSparksqlConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig">HadoopConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig">HiveConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#id DataprocJob#id}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig">PigConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig">PrestoConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig">PysparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference">Reference</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region">Region</a></code> | <code>*string</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig">SparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.placement"></a>

```go
Placement DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#placement DataprocJob#placement}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#force_delete DataprocJob#force_delete}

---

##### `HadoopConfig`<sup>Optional</sup> <a name="HadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hadoopConfig"></a>

```go
HadoopConfig DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#hadoop_config DataprocJob#hadoop_config}

---

##### `HiveConfig`<sup>Optional</sup> <a name="HiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.hiveConfig"></a>

```go
HiveConfig DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#hive_config DataprocJob#hive_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#id DataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. The labels to associate with this job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#labels DataprocJob#labels}

---

##### `PigConfig`<sup>Optional</sup> <a name="PigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pigConfig"></a>

```go
PigConfig DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#pig_config DataprocJob#pig_config}

---

##### `PrestoConfig`<sup>Optional</sup> <a name="PrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.prestoConfig"></a>

```go
PrestoConfig DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#presto_config DataprocJob#presto_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#project DataprocJob#project}

---

##### `PysparkConfig`<sup>Optional</sup> <a name="PysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.pysparkConfig"></a>

```go
PysparkConfig DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#pyspark_config DataprocJob#pyspark_config}

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.reference"></a>

```go
Reference DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#reference DataprocJob#reference}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#region DataprocJob#region}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.scheduling"></a>

```go
Scheduling DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#scheduling DataprocJob#scheduling}

---

##### `SparkConfig`<sup>Optional</sup> <a name="SparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparkConfig"></a>

```go
SparkConfig DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#spark_config DataprocJob#spark_config}

---

##### `SparksqlConfig`<sup>Optional</sup> <a name="SparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.sparksqlConfig"></a>

```go
SparksqlConfig DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#sparksql_config DataprocJob#sparksql_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobConfig.property.timeouts"></a>

```go
Timeouts DataprocJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts">DataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#timeouts DataprocJob#timeouts}

---

### DataprocJobHadoopConfig <a name="DataprocJobHadoopConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobHadoopConfig {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobHadoopConfigLoggingConfig,
	MainClass: *string,
	MainJarFileUri: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass">MainClass</a></code> | <code>*string</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, used to configure Spark. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_class DataprocJob#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.mainJarFileUri"></a>

```go
MainJarFileUri *string
```

- *Type:* *string

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobHadoopConfigLoggingConfig <a name="DataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobHadoopConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobHiveConfig <a name="DataprocJobHiveConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobHiveConfig {
	ContinueOnFailure: interface{},
	JarFileUris: *[]*string,
	Properties: *map[string]*string,
	QueryFileUri: *string,
	QueryList: *[]*string,
	ScriptVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList">QueryList</a></code> | <code>*[]*string</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.continueOnFailure"></a>

```go
ContinueOnFailure interface{}
```

- *Type:* interface{}

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.queryList"></a>

```go
QueryList *[]*string
```

- *Type:* *[]*string

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig.property.scriptVariables"></a>

```go
ScriptVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfig <a name="DataprocJobPigConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPigConfig {
	ContinueOnFailure: interface{},
	JarFileUris: *[]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPigConfigLoggingConfig,
	Properties: *map[string]*string,
	QueryFileUri: *string,
	QueryList: *[]*string,
	ScriptVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList">QueryList</a></code> | <code>*[]*string</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.continueOnFailure"></a>

```go
ContinueOnFailure interface{}
```

- *Type:* interface{}

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.queryList"></a>

```go
QueryList *[]*string
```

- *Type:* *[]*string

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfig.property.scriptVariables"></a>

```go
ScriptVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobPigConfigLoggingConfig <a name="DataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPigConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPlacement <a name="DataprocJobPlacement" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPlacement {
	ClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the cluster where the job will be submitted. |

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacement.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#cluster_name DataprocJob#cluster_name}

---

### DataprocJobPrestoConfig <a name="DataprocJobPrestoConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPrestoConfig {
	ClientTags: *[]*string,
	ContinueOnFailure: interface{},
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPrestoConfigLoggingConfig,
	OutputFormat: *string,
	Properties: *map[string]*string,
	QueryFileUri: *string,
	QueryList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags">ClientTags</a></code> | <code>*[]*string</code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList">QueryList</a></code> | <code>*[]*string</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `ClientTags`<sup>Optional</sup> <a name="ClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.clientTags"></a>

```go
ClientTags *[]*string
```

- *Type:* *[]*string

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#client_tags DataprocJob#client_tags}

---

##### `ContinueOnFailure`<sup>Optional</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.continueOnFailure"></a>

```go
ContinueOnFailure interface{}
```

- *Type:* interface{}

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#output_format DataprocJob#output_format}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig.property.queryList"></a>

```go
QueryList *[]*string
```

- *Type:* *[]*string

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}

---

### DataprocJobPrestoConfigLoggingConfig <a name="DataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPrestoConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobPysparkConfig <a name="DataprocJobPysparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPysparkConfig {
	MainPythonFileUri: *string,
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobPysparkConfigLoggingConfig,
	Properties: *map[string]*string,
	PythonFileUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args">Args</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | Optional. |

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```go
MainPythonFileUri *string
```

- *Type:* *string

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig.property.pythonFileUris"></a>

```go
PythonFileUris *[]*string
```

- *Type:* *[]*string

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#python_file_uris DataprocJob#python_file_uris}

---

### DataprocJobPysparkConfigLoggingConfig <a name="DataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobPysparkConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobReference <a name="DataprocJobReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobReference {
	JobId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId">JobId</a></code> | <code>*string</code> | The job ID, which must be unique within the project. |

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReference.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#job_id DataprocJob#job_id}

---

### DataprocJobScheduling <a name="DataprocJobScheduling" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobScheduling {
	MaxFailuresPerHour: *f64,
	MaxFailuresTotal: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour">MaxFailuresPerHour</a></code> | <code>*f64</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal">MaxFailuresTotal</a></code> | <code>*f64</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `MaxFailuresPerHour`<sup>Required</sup> <a name="MaxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresPerHour"></a>

```go
MaxFailuresPerHour *f64
```

- *Type:* *f64

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}

---

##### `MaxFailuresTotal`<sup>Required</sup> <a name="MaxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobScheduling.property.maxFailuresTotal"></a>

```go
MaxFailuresTotal *f64
```

- *Type:* *f64

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#max_failures_total DataprocJob#max_failures_total}

---

### DataprocJobSparkConfig <a name="DataprocJobSparkConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobSparkConfig {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobSparkConfigLoggingConfig,
	MainClass: *string,
	MainJarFileUri: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass">MainClass</a></code> | <code>*string</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, used to configure Spark. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_class DataprocJob#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.mainJarFileUri"></a>

```go
MainJarFileUri *string
```

- *Type:* *string

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

### DataprocJobSparkConfigLoggingConfig <a name="DataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobSparkConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobSparksqlConfig <a name="DataprocJobSparksqlConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobSparksqlConfig {
	JarFileUris: *[]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig,
	Properties: *map[string]*string,
	QueryFileUri: *string,
	QueryList: *[]*string,
	ScriptVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList">QueryList</a></code> | <code>*[]*string</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.loggingConfig"></a>

```go
LoggingConfig DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.queryList"></a>

```go
QueryList *[]*string
```

- *Type:* *[]*string

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig.property.scriptVariables"></a>

```go
ScriptVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}

---

### DataprocJobSparksqlConfigLoggingConfig <a name="DataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobSparksqlConfigLoggingConfig {
	DriverLogLevels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```go
DriverLogLevels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}

---

### DataprocJobStatus <a name="DataprocJobStatus" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobStatus {

}
```


### DataprocJobTimeouts <a name="DataprocJobTimeouts" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

&dataprocjob.DataprocJobTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#create DataprocJob#create}. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#delete DataprocJob#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#create DataprocJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#delete DataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocJobHadoopConfigLoggingConfigOutputReference <a name="DataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobHadoopConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobHadoopConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---


### DataprocJobHadoopConfigOutputReference <a name="DataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobHadoopConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobHadoopConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobHadoopConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```go
func ResetMainJarFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobHadoopConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfigOutputReference">DataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigLoggingConfig">DataprocJobHadoopConfigLoggingConfig</a>

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```go
func MainJarFileUriInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```go
func MainJarFileUri() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHadoopConfig">DataprocJobHadoopConfig</a>

---


### DataprocJobHiveConfigOutputReference <a name="DataprocJobHiveConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobHiveConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobHiveConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```go
func ResetContinueOnFailure()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetQueryList"></a>

```go
func ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```go
func ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList">QueryList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```go
func ContinueOnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```go
func QueryListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```go
func ScriptVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```go
func ContinueOnFailure() interface{}
```

- *Type:* interface{}

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.queryList"></a>

```go
func QueryList() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```go
func ScriptVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobHiveConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobHiveConfig">DataprocJobHiveConfig</a>

---


### DataprocJobPigConfigLoggingConfigOutputReference <a name="DataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPigConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPigConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---


### DataprocJobPigConfigOutputReference <a name="DataprocJobPigConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPigConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPigConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobPigConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```go
func ResetContinueOnFailure()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetQueryList"></a>

```go
func ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```go
func ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList">QueryList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobPigConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfigOutputReference">DataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```go
func ContinueOnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfigLoggingConfig">DataprocJobPigConfigLoggingConfig</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryListInput"></a>

```go
func QueryListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```go
func ScriptVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```go
func ContinueOnFailure() interface{}
```

- *Type:* interface{}

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.queryList"></a>

```go
func QueryList() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```go
func ScriptVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPigConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPigConfig">DataprocJobPigConfig</a>

---


### DataprocJobPlacementOutputReference <a name="DataprocJobPlacementOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid">ClusterUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterUuid`<sup>Required</sup> <a name="ClusterUuid" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterUuid"></a>

```go
func ClusterUuid() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPlacement">DataprocJobPlacement</a>

---


### DataprocJobPrestoConfigLoggingConfigOutputReference <a name="DataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPrestoConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPrestoConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---


### DataprocJobPrestoConfigOutputReference <a name="DataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPrestoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPrestoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags">ResetClientTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure">ResetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobPrestoConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `ResetClientTags` <a name="ResetClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```go
func ResetClientTags()
```

##### `ResetContinueOnFailure` <a name="ResetContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```go
func ResetContinueOnFailure()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```go
func ResetQueryList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput">ClientTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">ContinueOnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags">ClientTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure">ContinueOnFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList">QueryList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobPrestoConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfigOutputReference">DataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `ClientTagsInput`<sup>Optional</sup> <a name="ClientTagsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```go
func ClientTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContinueOnFailureInput`<sup>Optional</sup> <a name="ContinueOnFailureInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```go
func ContinueOnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigLoggingConfig">DataprocJobPrestoConfigLoggingConfig</a>

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```go
func QueryListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientTags`<sup>Required</sup> <a name="ClientTags" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```go
func ClientTags() *[]*string
```

- *Type:* *[]*string

---

##### `ContinueOnFailure`<sup>Required</sup> <a name="ContinueOnFailure" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```go
func ContinueOnFailure() interface{}
```

- *Type:* interface{}

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.queryList"></a>

```go
func QueryList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPrestoConfig">DataprocJobPrestoConfig</a>

---


### DataprocJobPysparkConfigLoggingConfigOutputReference <a name="DataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPysparkConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPysparkConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---


### DataprocJobPysparkConfigOutputReference <a name="DataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobPysparkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobPysparkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobPysparkConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```go
func ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobPysparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfigOutputReference">DataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigLoggingConfig">DataprocJobPysparkConfigLoggingConfig</a>

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```go
func MainPythonFileUriInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```go
func PythonFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```go
func MainPythonFileUri() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```go
func PythonFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobPysparkConfig">DataprocJobPysparkConfig</a>

---


### DataprocJobReferenceOutputReference <a name="DataprocJobReferenceOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId">ResetJobId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobId` <a name="ResetJobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.resetJobId"></a>

```go
func ResetJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobReference">DataprocJobReference</a>

---


### DataprocJobSchedulingOutputReference <a name="DataprocJobSchedulingOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">MaxFailuresPerHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">MaxFailuresTotalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour">MaxFailuresPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal">MaxFailuresTotal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFailuresPerHourInput`<sup>Optional</sup> <a name="MaxFailuresPerHourInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```go
func MaxFailuresPerHourInput() *f64
```

- *Type:* *f64

---

##### `MaxFailuresTotalInput`<sup>Optional</sup> <a name="MaxFailuresTotalInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```go
func MaxFailuresTotalInput() *f64
```

- *Type:* *f64

---

##### `MaxFailuresPerHour`<sup>Required</sup> <a name="MaxFailuresPerHour" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```go
func MaxFailuresPerHour() *f64
```

- *Type:* *f64

---

##### `MaxFailuresTotal`<sup>Required</sup> <a name="MaxFailuresTotal" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```go
func MaxFailuresTotal() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobScheduling">DataprocJobScheduling</a>

---


### DataprocJobSparkConfigLoggingConfigOutputReference <a name="DataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobSparkConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobSparkConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---


### DataprocJobSparkConfigOutputReference <a name="DataprocJobSparkConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobSparkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobSparkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobSparkConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```go
func ResetMainJarFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobSparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfigOutputReference">DataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigLoggingConfig">DataprocJobSparkConfigLoggingConfig</a>

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```go
func MainJarFileUriInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```go
func MainJarFileUri() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparkConfig">DataprocJobSparkConfig</a>

---


### DataprocJobSparksqlConfigLoggingConfigOutputReference <a name="DataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobSparksqlConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobSparksqlConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">DriverLogLevelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">DriverLogLevels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverLogLevelsInput`<sup>Optional</sup> <a name="DriverLogLevelsInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```go
func DriverLogLevelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverLogLevels`<sup>Required</sup> <a name="DriverLogLevels" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```go
func DriverLogLevels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---


### DataprocJobSparksqlConfigOutputReference <a name="DataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobSparksqlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobSparksqlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value DataprocJobSparksqlConfigLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```go
func ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```go
func ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList">QueryList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataprocJobSparksqlConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfigOutputReference">DataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() DataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigLoggingConfig">DataprocJobSparksqlConfigLoggingConfig</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```go
func QueryListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```go
func ScriptVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```go
func QueryList() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```go
func ScriptVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobSparksqlConfig">DataprocJobSparksqlConfig</a>

---


### DataprocJobStatusList <a name="DataprocJobStatusList" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocJobStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get"></a>

```go
func Get(index *f64) DataprocJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataprocJobStatusOutputReference <a name="DataprocJobStatusOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocJobStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime">StateStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate">Substate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateStartTime`<sup>Required</sup> <a name="StateStartTime" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.stateStartTime"></a>

```go
func StateStartTime() *string
```

- *Type:* *string

---

##### `Substate`<sup>Required</sup> <a name="Substate" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.substate"></a>

```go
func Substate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocJobStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataprocJob.DataprocJobStatus">DataprocJobStatus</a>

---


### DataprocJobTimeoutsOutputReference <a name="DataprocJobTimeoutsOutputReference" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocjob"

dataprocjob.NewDataprocJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocJob.DataprocJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



