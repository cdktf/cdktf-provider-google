# `dataGoogleMemorystoreInstance` Submodule <a name="`dataGoogleMemorystoreInstance` Submodule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMemorystoreInstance <a name="DataGoogleMemorystoreInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstance(scope Construct, id *string, config DataGoogleMemorystoreInstanceConfig) DataGoogleMemorystoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig">DataGoogleMemorystoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig">DataGoogleMemorystoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.DataGoogleMemorystoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.DataGoogleMemorystoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.DataGoogleMemorystoreInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.DataGoogleMemorystoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleMemorystoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleMemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.automatedBackupConfig">AutomatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList">DataGoogleMemorystoreInstanceAutomatedBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.backupCollection">BackupCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.crossInstanceReplicationConfig">CrossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList">DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.discoveryEndpoints">DiscoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList">DataGoogleMemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList">DataGoogleMemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineConfigs">EngineConfigs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList">DataGoogleMemorystoreInstanceGcsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList">DataGoogleMemorystoreInstanceMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList">DataGoogleMemorystoreInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.managedBackupSource">ManagedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList">DataGoogleMemorystoreInstanceManagedBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList">DataGoogleMemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList">DataGoogleMemorystoreInstancePersistenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAttachmentDetails">PscAttachmentDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList">DataGoogleMemorystoreInstancePscAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList">DataGoogleMemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList">DataGoogleMemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList">DataGoogleMemorystoreInstanceZoneDistributionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuthorizationMode`<sup>Required</sup> <a name="AuthorizationMode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.authorizationMode"></a>

```go
func AuthorizationMode() *string
```

- *Type:* *string

---

##### `AutomatedBackupConfig`<sup>Required</sup> <a name="AutomatedBackupConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.automatedBackupConfig"></a>

```go
func AutomatedBackupConfig() DataGoogleMemorystoreInstanceAutomatedBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList">DataGoogleMemorystoreInstanceAutomatedBackupConfigList</a>

---

##### `BackupCollection`<sup>Required</sup> <a name="BackupCollection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.backupCollection"></a>

```go
func BackupCollection() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CrossInstanceReplicationConfig`<sup>Required</sup> <a name="CrossInstanceReplicationConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.crossInstanceReplicationConfig"></a>

```go
func CrossInstanceReplicationConfig() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DesiredPscAutoConnections`<sup>Required</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.desiredPscAutoConnections"></a>

```go
func DesiredPscAutoConnections() DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList">DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `DiscoveryEndpoints`<sup>Required</sup> <a name="DiscoveryEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.discoveryEndpoints"></a>

```go
func DiscoveryEndpoints() DataGoogleMemorystoreInstanceDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList">DataGoogleMemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.endpoints"></a>

```go
func Endpoints() DataGoogleMemorystoreInstanceEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList">DataGoogleMemorystoreInstanceEndpointsList</a>

---

##### `EngineConfigs`<sup>Required</sup> <a name="EngineConfigs" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineConfigs"></a>

```go
func EngineConfigs() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.gcsSource"></a>

```go
func GcsSource() DataGoogleMemorystoreInstanceGcsSourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList">DataGoogleMemorystoreInstanceGcsSourceList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() DataGoogleMemorystoreInstanceMaintenancePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList">DataGoogleMemorystoreInstanceMaintenancePolicyList</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() DataGoogleMemorystoreInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList">DataGoogleMemorystoreInstanceMaintenanceScheduleList</a>

---

##### `ManagedBackupSource`<sup>Required</sup> <a name="ManagedBackupSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.managedBackupSource"></a>

```go
func ManagedBackupSource() DataGoogleMemorystoreInstanceManagedBackupSourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList">DataGoogleMemorystoreInstanceManagedBackupSourceList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeConfig"></a>

```go
func NodeConfig() DataGoogleMemorystoreInstanceNodeConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList">DataGoogleMemorystoreInstanceNodeConfigList</a>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.persistenceConfig"></a>

```go
func PersistenceConfig() DataGoogleMemorystoreInstancePersistenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList">DataGoogleMemorystoreInstancePersistenceConfigList</a>

---

##### `PscAttachmentDetails`<sup>Required</sup> <a name="PscAttachmentDetails" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAttachmentDetails"></a>

```go
func PscAttachmentDetails() DataGoogleMemorystoreInstancePscAttachmentDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList">DataGoogleMemorystoreInstancePscAttachmentDetailsList</a>

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAutoConnections"></a>

```go
func PscAutoConnections() DataGoogleMemorystoreInstancePscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList">DataGoogleMemorystoreInstancePscAutoConnectionsList</a>

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.stateInfo"></a>

```go
func StateInfo() DataGoogleMemorystoreInstanceStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList">DataGoogleMemorystoreInstanceStateInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ZoneDistributionConfig`<sup>Required</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.zoneDistributionConfig"></a>

```go
func ZoneDistributionConfig() DataGoogleMemorystoreInstanceZoneDistributionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList">DataGoogleMemorystoreInstanceZoneDistributionConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMemorystoreInstanceAutomatedBackupConfig <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceAutomatedBackupConfig {

}
```


### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule {

}
```


### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime {

}
```


### DataGoogleMemorystoreInstanceConfig <a name="DataGoogleMemorystoreInstanceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#id DataGoogleMemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#project DataGoogleMemorystoreInstance#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#instance_id DataGoogleMemorystoreInstance#instance_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#id DataGoogleMemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#location DataGoogleMemorystoreInstance#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/memorystore_instance#project DataGoogleMemorystoreInstance#project}.

---

### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig {

}
```


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership {

}
```


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance {

}
```


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance {

}
```


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance {

}
```


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances {

}
```


### DataGoogleMemorystoreInstanceDesiredPscAutoConnections <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections {

}
```


### DataGoogleMemorystoreInstanceDiscoveryEndpoints <a name="DataGoogleMemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints {

}
```


### DataGoogleMemorystoreInstanceEndpoints <a name="DataGoogleMemorystoreInstanceEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceEndpoints {

}
```


### DataGoogleMemorystoreInstanceEndpointsConnections <a name="DataGoogleMemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceEndpointsConnections {

}
```


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection {

}
```


### DataGoogleMemorystoreInstanceGcsSource <a name="DataGoogleMemorystoreInstanceGcsSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceGcsSource {

}
```


### DataGoogleMemorystoreInstanceMaintenancePolicy <a name="DataGoogleMemorystoreInstanceMaintenancePolicy" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceMaintenancePolicy {

}
```


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow {

}
```


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {

}
```


### DataGoogleMemorystoreInstanceMaintenanceSchedule <a name="DataGoogleMemorystoreInstanceMaintenanceSchedule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceMaintenanceSchedule {

}
```


### DataGoogleMemorystoreInstanceManagedBackupSource <a name="DataGoogleMemorystoreInstanceManagedBackupSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceManagedBackupSource {

}
```


### DataGoogleMemorystoreInstanceNodeConfig <a name="DataGoogleMemorystoreInstanceNodeConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceNodeConfig {

}
```


### DataGoogleMemorystoreInstancePersistenceConfig <a name="DataGoogleMemorystoreInstancePersistenceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstancePersistenceConfig {

}
```


### DataGoogleMemorystoreInstancePersistenceConfigAofConfig <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig {

}
```


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfig <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig {

}
```


### DataGoogleMemorystoreInstancePscAttachmentDetails <a name="DataGoogleMemorystoreInstancePscAttachmentDetails" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstancePscAttachmentDetails {

}
```


### DataGoogleMemorystoreInstancePscAutoConnections <a name="DataGoogleMemorystoreInstancePscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstancePscAutoConnections {

}
```


### DataGoogleMemorystoreInstanceStateInfo <a name="DataGoogleMemorystoreInstanceStateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceStateInfo {

}
```


### DataGoogleMemorystoreInstanceStateInfoUpdateInfo <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo {

}
```


### DataGoogleMemorystoreInstanceZoneDistributionConfig <a name="DataGoogleMemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

&datagooglememorystoreinstance.DataGoogleMemorystoreInstanceZoneDistributionConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### DataGoogleMemorystoreInstanceAutomatedBackupConfigList <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference <a name="DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">FixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfig">DataGoogleMemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedFrequencySchedule`<sup>Required</sup> <a name="FixedFrequencySchedule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```go
func FixedFrequencySchedule() DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList">DataGoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList</a>

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceAutomatedBackupConfig">DataGoogleMemorystoreInstanceAutomatedBackupConfig</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance">SecondaryInstance</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a>

---

##### `SecondaryInstance`<sup>Required</sup> <a name="SecondaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance"></a>

```go
func SecondaryInstance() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership">Membership</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances">SecondaryInstances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole"></a>

```go
func InstanceRole() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership"></a>

```go
func Membership() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a>

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList</a>

---

##### `SecondaryInstances`<sup>Required</sup> <a name="SecondaryInstances" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances"></a>

```go
func SecondaryInstances() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfig</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference <a name="DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">DataGoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>

---


### DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections">DataGoogleMemorystoreInstanceDesiredPscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceDesiredPscAutoConnections
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections">DataGoogleMemorystoreInstanceDesiredPscAutoConnections</a>

---


### DataGoogleMemorystoreInstanceDiscoveryEndpointsList <a name="DataGoogleMemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceDiscoveryEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceDiscoveryEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference <a name="DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints">DataGoogleMemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints">DataGoogleMemorystoreInstanceDiscoveryEndpoints</a>

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsList <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceEndpointsConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">PscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections">DataGoogleMemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscAutoConnection`<sup>Required</sup> <a name="PscAutoConnection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```go
func PscAutoConnection() DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceEndpointsConnections
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections">DataGoogleMemorystoreInstanceEndpointsConnections</a>

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### DataGoogleMemorystoreInstanceEndpointsList <a name="DataGoogleMemorystoreInstanceEndpointsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceEndpointsOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList">DataGoogleMemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints">DataGoogleMemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```go
func Connections() DataGoogleMemorystoreInstanceEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList">DataGoogleMemorystoreInstanceEndpointsConnectionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints">DataGoogleMemorystoreInstanceEndpoints</a>

---


### DataGoogleMemorystoreInstanceGcsSourceList <a name="DataGoogleMemorystoreInstanceGcsSourceList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceGcsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceGcsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceGcsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceGcsSourceOutputReference <a name="DataGoogleMemorystoreInstanceGcsSourceOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceGcsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceGcsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSource">DataGoogleMemorystoreInstanceGcsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceGcsSource">DataGoogleMemorystoreInstanceGcsSource</a>

---


### DataGoogleMemorystoreInstanceMaintenancePolicyList <a name="DataGoogleMemorystoreInstanceMaintenancePolicyList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference <a name="DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicy">DataGoogleMemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```go
func WeeklyMaintenanceWindow() DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicy">DataGoogleMemorystoreInstanceMaintenancePolicy</a>

---


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### DataGoogleMemorystoreInstanceMaintenanceScheduleList <a name="DataGoogleMemorystoreInstanceMaintenanceScheduleList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference <a name="DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceSchedule">DataGoogleMemorystoreInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```go
func ScheduleDeadlineTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceMaintenanceSchedule">DataGoogleMemorystoreInstanceMaintenanceSchedule</a>

---


### DataGoogleMemorystoreInstanceManagedBackupSourceList <a name="DataGoogleMemorystoreInstanceManagedBackupSourceList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceManagedBackupSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceManagedBackupSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference <a name="DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceManagedBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup">Backup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSource">DataGoogleMemorystoreInstanceManagedBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.backup"></a>

```go
func Backup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceManagedBackupSource">DataGoogleMemorystoreInstanceManagedBackupSource</a>

---


### DataGoogleMemorystoreInstanceNodeConfigList <a name="DataGoogleMemorystoreInstanceNodeConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceNodeConfigOutputReference <a name="DataGoogleMemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig">DataGoogleMemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig">DataGoogleMemorystoreInstanceNodeConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigAofConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigAofConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstancePersistenceConfigAofConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">AppendFsync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig">DataGoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppendFsync`<sup>Required</sup> <a name="AppendFsync" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```go
func AppendFsync() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig">DataGoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstancePersistenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstancePersistenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstancePersistenceConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstancePersistenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList">DataGoogleMemorystoreInstancePersistenceConfigAofConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList">DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig">DataGoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AofConfig`<sup>Required</sup> <a name="AofConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```go
func AofConfig() DataGoogleMemorystoreInstancePersistenceConfigAofConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList">DataGoogleMemorystoreInstancePersistenceConfigAofConfigList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RdbConfig`<sup>Required</sup> <a name="RdbConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```go
func RdbConfig() DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList">DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig">DataGoogleMemorystoreInstancePersistenceConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigRdbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig">DataGoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```go
func RdbSnapshotPeriod() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```go
func RdbSnapshotStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig">DataGoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---


### DataGoogleMemorystoreInstancePscAttachmentDetailsList <a name="DataGoogleMemorystoreInstancePscAttachmentDetailsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePscAttachmentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstancePscAttachmentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference <a name="DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetails">DataGoogleMemorystoreInstancePscAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstancePscAttachmentDetails
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAttachmentDetails">DataGoogleMemorystoreInstancePscAttachmentDetails</a>

---


### DataGoogleMemorystoreInstancePscAutoConnectionsList <a name="DataGoogleMemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstancePscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference <a name="DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstancePscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections">DataGoogleMemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstancePscAutoConnections
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections">DataGoogleMemorystoreInstancePscAutoConnections</a>

---


### DataGoogleMemorystoreInstanceStateInfoList <a name="DataGoogleMemorystoreInstanceStateInfoList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceStateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceStateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceStateInfoOutputReference <a name="DataGoogleMemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceStateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceStateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo">UpdateInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList">DataGoogleMemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo">DataGoogleMemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInfo`<sup>Required</sup> <a name="UpdateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```go
func UpdateInfo() DataGoogleMemorystoreInstanceStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList">DataGoogleMemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceStateInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo">DataGoogleMemorystoreInstanceStateInfo</a>

---


### DataGoogleMemorystoreInstanceStateInfoUpdateInfoList <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceStateInfoUpdateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceStateInfoUpdateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion">TargetEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType">TargetNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">TargetShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo">DataGoogleMemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetEngineVersion`<sup>Required</sup> <a name="TargetEngineVersion" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion"></a>

```go
func TargetEngineVersion() *string
```

- *Type:* *string

---

##### `TargetNodeType`<sup>Required</sup> <a name="TargetNodeType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType"></a>

```go
func TargetNodeType() *string
```

- *Type:* *string

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```go
func TargetReplicaCount() *f64
```

- *Type:* *f64

---

##### `TargetShardCount`<sup>Required</sup> <a name="TargetShardCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```go
func TargetShardCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo">DataGoogleMemorystoreInstanceStateInfoUpdateInfo</a>

---


### DataGoogleMemorystoreInstanceZoneDistributionConfigList <a name="DataGoogleMemorystoreInstanceZoneDistributionConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceZoneDistributionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMemorystoreInstanceZoneDistributionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference <a name="DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglememorystoreinstance"

datagooglememorystoreinstance.NewDataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig">DataGoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig">DataGoogleMemorystoreInstanceZoneDistributionConfig</a>

---



