# `dataGoogleApphubDiscoveredWorkload` Submodule <a name="`dataGoogleApphubDiscoveredWorkload` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredWorkload <a name="DataGoogleApphubDiscoveredWorkload" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload google_apphub_discovered_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

new dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload(scope: Construct, id: string, config: DataGoogleApphubDiscoveredWorkloadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig">DataGoogleApphubDiscoveredWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig">DataGoogleApphubDiscoveredWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApphubDiscoveredWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApphubDiscoveredWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties">workloadProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference">workloadReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput">workloadUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri">workloadUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workloadProperties`<sup>Required</sup> <a name="workloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties"></a>

```typescript
public readonly workloadProperties: DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a>

---

##### `workloadReference`<sup>Required</sup> <a name="workloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference"></a>

```typescript
public readonly workloadReference: DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadUriInput`<sup>Optional</sup> <a name="workloadUriInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput"></a>

```typescript
public readonly workloadUriInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadUri`<sup>Required</sup> <a name="workloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri"></a>

```typescript
public readonly workloadUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredWorkloadConfig <a name="DataGoogleApphubDiscoveredWorkloadConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

const dataGoogleApphubDiscoveredWorkloadConfig: dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri">workloadUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `workloadUri`<sup>Required</sup> <a name="workloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri"></a>

```typescript
public readonly workloadUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

### DataGoogleApphubDiscoveredWorkloadWorkloadProperties <a name="DataGoogleApphubDiscoveredWorkloadWorkloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

const dataGoogleApphubDiscoveredWorkloadWorkloadProperties: dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties = { ... }
```


### DataGoogleApphubDiscoveredWorkloadWorkloadReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

const dataGoogleApphubDiscoveredWorkloadWorkloadReference: dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

new dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

new dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject">gcpProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```typescript
public readonly gcpProject: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubDiscoveredWorkloadWorkloadProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a>

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

new dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get"></a>

```typescript
public get(index: number): DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```typescript
import { dataGoogleApphubDiscoveredWorkload } from '@cdktf/provider-google'

new dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleApphubDiscoveredWorkloadWorkloadReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a>

---



