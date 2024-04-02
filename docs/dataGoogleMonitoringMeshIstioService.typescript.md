# `dataGoogleMonitoringMeshIstioService` Submodule <a name="`dataGoogleMonitoringMeshIstioService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringMeshIstioService <a name="DataGoogleMonitoringMeshIstioService" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service google_monitoring_mesh_istio_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

new dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService(scope: Construct, id: string, config: DataGoogleMonitoringMeshIstioServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig">DataGoogleMonitoringMeshIstioServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig">DataGoogleMonitoringMeshIstioServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringMeshIstioService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleMonitoringMeshIstioService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMonitoringMeshIstioService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMonitoringMeshIstioService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringMeshIstioService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels">userLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput">meshUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid">meshUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry"></a>

```typescript
public readonly telemetry: DataGoogleMonitoringMeshIstioServiceTelemetryList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a>

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels"></a>

```typescript
public readonly userLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshUidInput`<sup>Optional</sup> <a name="meshUidInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput"></a>

```typescript
public readonly meshUidInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput"></a>

```typescript
public readonly serviceNamespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid"></a>

```typescript
public readonly meshUid: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringMeshIstioServiceConfig <a name="DataGoogleMonitoringMeshIstioServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.Initializer"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

const dataGoogleMonitoringMeshIstioServiceConfig: dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid">meshUid</a></code> | <code>string</code> | Identifier for the mesh in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid"></a>

```typescript
public readonly meshUid: string;
```

- *Type:* string

Identifier for the mesh in which this Istio service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#mesh_uid DataGoogleMonitoringMeshIstioService#mesh_uid}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#service_name DataGoogleMonitoringMeshIstioService#service_name}

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#service_namespace DataGoogleMonitoringMeshIstioService#service_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}.

---

### DataGoogleMonitoringMeshIstioServiceTelemetry <a name="DataGoogleMonitoringMeshIstioServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry.Initializer"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

const dataGoogleMonitoringMeshIstioServiceTelemetry: dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringMeshIstioServiceTelemetryList <a name="DataGoogleMonitoringMeshIstioServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

new dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get"></a>

```typescript
public get(index: number): DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference <a name="DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer"></a>

```typescript
import { dataGoogleMonitoringMeshIstioService } from '@cdktf/provider-google'

new dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleMonitoringMeshIstioServiceTelemetry;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a>

---



