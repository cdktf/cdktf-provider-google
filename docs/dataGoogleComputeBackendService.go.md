# `dataGoogleComputeBackendService` Submodule <a name="`dataGoogleComputeBackendService` Submodule" id="@cdktf/provider-google.dataGoogleComputeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeBackendService <a name="DataGoogleComputeBackendService" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendService(scope Construct, id *string, config DataGoogleComputeBackendServiceConfig) DataGoogleComputeBackendService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig">DataGoogleComputeBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig">DataGoogleComputeBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.DataGoogleComputeBackendService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.DataGoogleComputeBackendService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.DataGoogleComputeBackendService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.DataGoogleComputeBackendService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList">DataGoogleComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList">DataGoogleComputeBackendServiceCdnPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList">DataGoogleComputeBackendServiceCircuitBreakersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.compressionMode">CompressionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList">DataGoogleComputeBackendServiceConsistentHashList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList">DataGoogleComputeBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customRequestHeaders">CustomRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.enableCdn">EnableCdn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.externalManagedMigrationState">ExternalManagedMigrationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.externalManagedMigrationTestingPercentage">ExternalManagedMigrationTestingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.generatedId">GeneratedId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList">DataGoogleComputeBackendServiceIapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.localityLbPolicies">LocalityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList">DataGoogleComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList">DataGoogleComputeBackendServiceLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.maxStreamDuration">MaxStreamDuration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList">DataGoogleComputeBackendServiceMaxStreamDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList">DataGoogleComputeBackendServiceOutlierDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.securitySettings">SecuritySettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList">DataGoogleComputeBackendServiceSecuritySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.serviceLbPolicy">ServiceLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeBackendServiceStrongSessionAffinityCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.tlsSettings">TlsSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList">DataGoogleComputeBackendServiceTlsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.affinityCookieTtlSec"></a>

```go
func AffinityCookieTtlSec() *f64
```

- *Type:* *f64

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.backend"></a>

```go
func Backend() DataGoogleComputeBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList">DataGoogleComputeBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.cdnPolicy"></a>

```go
func CdnPolicy() DataGoogleComputeBackendServiceCdnPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList">DataGoogleComputeBackendServiceCdnPolicyList</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.circuitBreakers"></a>

```go
func CircuitBreakers() DataGoogleComputeBackendServiceCircuitBreakersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList">DataGoogleComputeBackendServiceCircuitBreakersList</a>

---

##### `CompressionMode`<sup>Required</sup> <a name="CompressionMode" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.compressionMode"></a>

```go
func CompressionMode() *string
```

- *Type:* *string

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```go
func ConnectionDrainingTimeoutSec() *f64
```

- *Type:* *f64

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.consistentHash"></a>

```go
func ConsistentHash() DataGoogleComputeBackendServiceConsistentHashList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList">DataGoogleComputeBackendServiceConsistentHashList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customMetrics"></a>

```go
func CustomMetrics() DataGoogleComputeBackendServiceCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList">DataGoogleComputeBackendServiceCustomMetricsList</a>

---

##### `CustomRequestHeaders`<sup>Required</sup> <a name="CustomRequestHeaders" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customRequestHeaders"></a>

```go
func CustomRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `CustomResponseHeaders`<sup>Required</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.customResponseHeaders"></a>

```go
func CustomResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeSecurityPolicy`<sup>Required</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.edgeSecurityPolicy"></a>

```go
func EdgeSecurityPolicy() *string
```

- *Type:* *string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.enableCdn"></a>

```go
func EnableCdn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalManagedMigrationState`<sup>Required</sup> <a name="ExternalManagedMigrationState" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.externalManagedMigrationState"></a>

```go
func ExternalManagedMigrationState() *string
```

- *Type:* *string

---

##### `ExternalManagedMigrationTestingPercentage`<sup>Required</sup> <a name="ExternalManagedMigrationTestingPercentage" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.externalManagedMigrationTestingPercentage"></a>

```go
func ExternalManagedMigrationTestingPercentage() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.generatedId"></a>

```go
func GeneratedId() *f64
```

- *Type:* *f64

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.healthChecks"></a>

```go
func HealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.iap"></a>

```go
func Iap() DataGoogleComputeBackendServiceIapList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList">DataGoogleComputeBackendServiceIapList</a>

---

##### `IpAddressSelectionPolicy`<sup>Required</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.ipAddressSelectionPolicy"></a>

```go
func IpAddressSelectionPolicy() *string
```

- *Type:* *string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `LocalityLbPolicies`<sup>Required</sup> <a name="LocalityLbPolicies" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.localityLbPolicies"></a>

```go
func LocalityLbPolicies() DataGoogleComputeBackendServiceLocalityLbPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList">DataGoogleComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.localityLbPolicy"></a>

```go
func LocalityLbPolicy() *string
```

- *Type:* *string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.logConfig"></a>

```go
func LogConfig() DataGoogleComputeBackendServiceLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList">DataGoogleComputeBackendServiceLogConfigList</a>

---

##### `MaxStreamDuration`<sup>Required</sup> <a name="MaxStreamDuration" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.maxStreamDuration"></a>

```go
func MaxStreamDuration() DataGoogleComputeBackendServiceMaxStreamDurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList">DataGoogleComputeBackendServiceMaxStreamDurationList</a>

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.outlierDetection"></a>

```go
func OutlierDetection() DataGoogleComputeBackendServiceOutlierDetectionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList">DataGoogleComputeBackendServiceOutlierDetectionList</a>

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.securitySettings"></a>

```go
func SecuritySettings() DataGoogleComputeBackendServiceSecuritySettingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList">DataGoogleComputeBackendServiceSecuritySettingsList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceLbPolicy`<sup>Required</sup> <a name="ServiceLbPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.serviceLbPolicy"></a>

```go
func ServiceLbPolicy() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `StrongSessionAffinityCookie`<sup>Required</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.strongSessionAffinityCookie"></a>

```go
func StrongSessionAffinityCookie() DataGoogleComputeBackendServiceStrongSessionAffinityCookieList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeBackendServiceStrongSessionAffinityCookieList</a>

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `TlsSettings`<sup>Required</sup> <a name="TlsSettings" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.tlsSettings"></a>

```go
func TlsSettings() DataGoogleComputeBackendServiceTlsSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList">DataGoogleComputeBackendServiceTlsSettingsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeBackendServiceBackend <a name="DataGoogleComputeBackendServiceBackend" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceBackend {

}
```


### DataGoogleComputeBackendServiceBackendCustomMetrics <a name="DataGoogleComputeBackendServiceBackendCustomMetrics" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceBackendCustomMetrics {

}
```


### DataGoogleComputeBackendServiceCdnPolicy <a name="DataGoogleComputeBackendServiceCdnPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCdnPolicy {

}
```


### DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders {

}
```


### DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy {

}
```


### DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy {

}
```


### DataGoogleComputeBackendServiceCircuitBreakers <a name="DataGoogleComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCircuitBreakers {

}
```


### DataGoogleComputeBackendServiceConfig <a name="DataGoogleComputeBackendServiceConfig" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#id DataGoogleComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#project DataGoogleComputeBackendService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#name DataGoogleComputeBackendService#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#id DataGoogleComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_backend_service#project DataGoogleComputeBackendService#project}.

---

### DataGoogleComputeBackendServiceConsistentHash <a name="DataGoogleComputeBackendServiceConsistentHash" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceConsistentHash {

}
```


### DataGoogleComputeBackendServiceConsistentHashHttpCookie <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceConsistentHashHttpCookie {

}
```


### DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl {

}
```


### DataGoogleComputeBackendServiceCustomMetrics <a name="DataGoogleComputeBackendServiceCustomMetrics" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceCustomMetrics {

}
```


### DataGoogleComputeBackendServiceIap <a name="DataGoogleComputeBackendServiceIap" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceIap {

}
```


### DataGoogleComputeBackendServiceLocalityLbPolicies <a name="DataGoogleComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceLocalityLbPolicies {

}
```


### DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy {

}
```


### DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy {

}
```


### DataGoogleComputeBackendServiceLogConfig <a name="DataGoogleComputeBackendServiceLogConfig" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceLogConfig {

}
```


### DataGoogleComputeBackendServiceMaxStreamDuration <a name="DataGoogleComputeBackendServiceMaxStreamDuration" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceMaxStreamDuration {

}
```


### DataGoogleComputeBackendServiceOutlierDetection <a name="DataGoogleComputeBackendServiceOutlierDetection" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceOutlierDetection {

}
```


### DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime {

}
```


### DataGoogleComputeBackendServiceOutlierDetectionInterval <a name="DataGoogleComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceOutlierDetectionInterval {

}
```


### DataGoogleComputeBackendServiceSecuritySettings <a name="DataGoogleComputeBackendServiceSecuritySettings" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceSecuritySettings {

}
```


### DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication {

}
```


### DataGoogleComputeBackendServiceStrongSessionAffinityCookie <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceStrongSessionAffinityCookie {

}
```


### DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl {

}
```


### DataGoogleComputeBackendServiceTlsSettings <a name="DataGoogleComputeBackendServiceTlsSettings" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceTlsSettings {

}
```


### DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames <a name="DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

&datagooglecomputebackendservice.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeBackendServiceBackendCustomMetricsList <a name="DataGoogleComputeBackendServiceBackendCustomMetricsList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceBackendCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceBackendCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference <a name="DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceBackendCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetrics">DataGoogleComputeBackendServiceBackendCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```go
func DryRun() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceBackendCustomMetrics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetrics">DataGoogleComputeBackendServiceBackendCustomMetrics</a>

---


### DataGoogleComputeBackendServiceBackendList <a name="DataGoogleComputeBackendServiceBackendList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceBackendOutputReference <a name="DataGoogleComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList">DataGoogleComputeBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackend">DataGoogleComputeBackendServiceBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```go
func BalancingMode() *string
```

- *Type:* *string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```go
func CapacityScaler() *f64
```

- *Type:* *f64

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.customMetrics"></a>

```go
func CustomMetrics() DataGoogleComputeBackendServiceBackendCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendCustomMetricsList">DataGoogleComputeBackendServiceBackendCustomMetricsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```go
func MaxConnectionsPerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```go
func MaxConnectionsPerInstance() *f64
```

- *Type:* *f64

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```go
func MaxRate() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```go
func MaxRatePerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```go
func MaxRatePerInstance() *f64
```

- *Type:* *f64

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceBackend
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceBackend">DataGoogleComputeBackendServiceBackend</a>

---


### DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>

---


### DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList <a name="DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```go
func IncludeHost() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeHttpHeaders`<sup>Required</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```go
func IncludeHttpHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```go
func IncludeNamedCookies() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```go
func IncludeProtocol() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```go
func IncludeQueryString() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```go
func QueryStringBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```go
func QueryStringWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### DataGoogleComputeBackendServiceCdnPolicyList <a name="DataGoogleComputeBackendServiceCdnPolicyList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCdnPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCdnPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### DataGoogleComputeBackendServiceCdnPolicyOutputReference <a name="DataGoogleComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescing">RequestCoalescing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicy">DataGoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassCacheOnRequestHeaders`<sup>Required</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```go
func BypassCacheOnRequestHeaders() DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">DataGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList</a>

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *f64
```

- *Type:* *f64

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `RequestCoalescing`<sup>Required</sup> <a name="RequestCoalescing" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.requestCoalescing"></a>

```go
func RequestCoalescing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```go
func ServeWhileStale() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```go
func SignedUrlCacheMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCdnPolicy">DataGoogleComputeBackendServiceCdnPolicy</a>

---


### DataGoogleComputeBackendServiceCircuitBreakersList <a name="DataGoogleComputeBackendServiceCircuitBreakersList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCircuitBreakersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCircuitBreakersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCircuitBreakersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCircuitBreakersOutputReference <a name="DataGoogleComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCircuitBreakersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCircuitBreakersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakers">DataGoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```go
func MaxPendingRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```go
func MaxRequestsPerConnection() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCircuitBreakers">DataGoogleComputeBackendServiceCircuitBreakers</a>

---


### DataGoogleComputeBackendServiceConsistentHashHttpCookieList <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookieList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashHttpCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceConsistentHashHttpCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookie">DataGoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```go
func Ttl() DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookie">DataGoogleComputeBackendServiceConsistentHashHttpCookie</a>

---


### DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### DataGoogleComputeBackendServiceConsistentHashList <a name="DataGoogleComputeBackendServiceConsistentHashList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceConsistentHashList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceConsistentHashOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceConsistentHashOutputReference <a name="DataGoogleComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceConsistentHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceConsistentHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList">DataGoogleComputeBackendServiceConsistentHashHttpCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHash">DataGoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```go
func HttpCookie() DataGoogleComputeBackendServiceConsistentHashHttpCookieList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashHttpCookieList">DataGoogleComputeBackendServiceConsistentHashHttpCookieList</a>

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```go
func MinimumRingSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceConsistentHash">DataGoogleComputeBackendServiceConsistentHash</a>

---


### DataGoogleComputeBackendServiceCustomMetricsList <a name="DataGoogleComputeBackendServiceCustomMetricsList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceCustomMetricsOutputReference <a name="DataGoogleComputeBackendServiceCustomMetricsOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetrics">DataGoogleComputeBackendServiceCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```go
func DryRun() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceCustomMetrics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceCustomMetrics">DataGoogleComputeBackendServiceCustomMetrics</a>

---


### DataGoogleComputeBackendServiceIapList <a name="DataGoogleComputeBackendServiceIapList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceIapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceIapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceIapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceIapOutputReference <a name="DataGoogleComputeBackendServiceIapOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIap">DataGoogleComputeBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```go
func Oauth2ClientId() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```go
func Oauth2ClientSecret() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```go
func Oauth2ClientSecretSha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceIap">DataGoogleComputeBackendServiceIap</a>

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesList <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList">DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList">DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPolicies">DataGoogleComputeBackendServiceLocalityLbPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```go
func CustomPolicy() DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList">DataGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyList</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```go
func Policy() DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList">DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceLocalityLbPolicies
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPolicies">DataGoogleComputeBackendServiceLocalityLbPolicies</a>

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy">DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy">DataGoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### DataGoogleComputeBackendServiceLogConfigList <a name="DataGoogleComputeBackendServiceLogConfigList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceLogConfigOutputReference <a name="DataGoogleComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.optionalFields">OptionalFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.optionalMode">OptionalMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfig">DataGoogleComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```go
func OptionalFields() *[]*string
```

- *Type:* *[]*string

---

##### `OptionalMode`<sup>Required</sup> <a name="OptionalMode" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```go
func OptionalMode() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceLogConfig">DataGoogleComputeBackendServiceLogConfig</a>

---


### DataGoogleComputeBackendServiceMaxStreamDurationList <a name="DataGoogleComputeBackendServiceMaxStreamDurationList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceMaxStreamDurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceMaxStreamDurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceMaxStreamDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceMaxStreamDurationOutputReference <a name="DataGoogleComputeBackendServiceMaxStreamDurationOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceMaxStreamDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceMaxStreamDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDuration">DataGoogleComputeBackendServiceMaxStreamDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceMaxStreamDuration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceMaxStreamDuration">DataGoogleComputeBackendServiceMaxStreamDuration</a>

---


### DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList <a name="DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### DataGoogleComputeBackendServiceOutlierDetectionIntervalList <a name="DataGoogleComputeBackendServiceOutlierDetectionIntervalList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionIntervalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceOutlierDetectionIntervalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionInterval">DataGoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionInterval">DataGoogleComputeBackendServiceOutlierDetectionInterval</a>

---


### DataGoogleComputeBackendServiceOutlierDetectionList <a name="DataGoogleComputeBackendServiceOutlierDetectionList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceOutlierDetectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceOutlierDetectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceOutlierDetectionOutputReference <a name="DataGoogleComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceOutlierDetectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceOutlierDetectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList">DataGoogleComputeBackendServiceOutlierDetectionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetection">DataGoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```go
func BaseEjectionTime() DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList</a>

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```go
func ConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```go
func ConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```go
func EnforcingConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```go
func EnforcingConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```go
func EnforcingSuccessRate() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```go
func Interval() DataGoogleComputeBackendServiceOutlierDetectionIntervalList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionIntervalList">DataGoogleComputeBackendServiceOutlierDetectionIntervalList</a>

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```go
func MaxEjectionPercent() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```go
func SuccessRateMinimumHosts() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```go
func SuccessRateRequestVolume() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```go
func SuccessRateStdevFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceOutlierDetection">DataGoogleComputeBackendServiceOutlierDetection</a>

---


### DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList <a name="DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">AccessKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `AccessKeyVersion`<sup>Required</sup> <a name="AccessKeyVersion" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```go
func AccessKeyVersion() *string
```

- *Type:* *string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```go
func OriginRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">DataGoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### DataGoogleComputeBackendServiceSecuritySettingsList <a name="DataGoogleComputeBackendServiceSecuritySettingsList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceSecuritySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceSecuritySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceSecuritySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceSecuritySettingsOutputReference <a name="DataGoogleComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceSecuritySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceSecuritySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList">DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">SubjectAltNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettings">DataGoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```go
func AwsV4Authentication() DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList">DataGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationList</a>

---

##### `ClientTlsPolicy`<sup>Required</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```go
func ClientTlsPolicy() *string
```

- *Type:* *string

---

##### `SubjectAltNames`<sup>Required</sup> <a name="SubjectAltNames" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```go
func SubjectAltNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceSecuritySettings">DataGoogleComputeBackendServiceSecuritySettings</a>

---


### DataGoogleComputeBackendServiceStrongSessionAffinityCookieList <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookieList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceStrongSessionAffinityCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceStrongSessionAffinityCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookie">DataGoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```go
func Ttl() DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookie">DataGoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---


### DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### DataGoogleComputeBackendServiceTlsSettingsList <a name="DataGoogleComputeBackendServiceTlsSettingsList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceTlsSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceTlsSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceTlsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceTlsSettingsOutputReference <a name="DataGoogleComputeBackendServiceTlsSettingsOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceTlsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceTlsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfig">AuthenticationConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.sni">Sni</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNames">SubjectAltNames</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList">DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettings">DataGoogleComputeBackendServiceTlsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.authenticationConfig"></a>

```go
func AuthenticationConfig() *string
```

- *Type:* *string

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.sni"></a>

```go
func Sni() *string
```

- *Type:* *string

---

##### `SubjectAltNames`<sup>Required</sup> <a name="SubjectAltNames" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.subjectAltNames"></a>

```go
func SubjectAltNames() DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList">DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceTlsSettings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettings">DataGoogleComputeBackendServiceTlsSettings</a>

---


### DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList <a name="DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference <a name="DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomputebackendservice"

datagooglecomputebackendservice.NewDataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier">UniformResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames">DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `UniformResourceIdentifier`<sup>Required</sup> <a name="UniformResourceIdentifier" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier"></a>

```go
func UniformResourceIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeBackendService.DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames">DataGoogleComputeBackendServiceTlsSettingsSubjectAltNames</a>

---



