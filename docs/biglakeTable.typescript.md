# `biglakeTable` Submodule <a name="`biglakeTable` Submodule" id="@cdktf/provider-google.biglakeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeTable <a name="BiglakeTable" id="@cdktf/provider-google.biglakeTable.BiglakeTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table google_biglake_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

new biglakeTable.BiglakeTable(scope: Construct, id: string, config: BiglakeTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig">BiglakeTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig">BiglakeTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions">putHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetHiveOptions">resetHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.biglakeTable.BiglakeTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHiveOptions` <a name="putHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions"></a>

```typescript
public putHiveOptions(value: BiglakeTableHiveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts"></a>

```typescript
public putTimeouts(value: BiglakeTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetHiveOptions` <a name="resetHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetHiveOptions"></a>

```typescript
public resetHiveOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BiglakeTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

biglakeTable.BiglakeTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

biglakeTable.BiglakeTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

biglakeTable.BiglakeTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

biglakeTable.BiglakeTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BiglakeTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BiglakeTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference">BiglakeTableHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference">BiglakeTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptionsInput">hiveOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `hiveOptions`<sup>Required</sup> <a name="hiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptions"></a>

```typescript
public readonly hiveOptions: BiglakeTableHiveOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference">BiglakeTableHiveOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference">BiglakeTableTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hiveOptionsInput`<sup>Optional</sup> <a name="hiveOptionsInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptionsInput"></a>

```typescript
public readonly hiveOptionsInput: BiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BiglakeTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeTableConfig <a name="BiglakeTableConfig" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

const biglakeTableConfig: biglakeTable.BiglakeTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.name">name</a></code> | <code>string</code> | Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.database">database</a></code> | <code>string</code> | The id of the parent database. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#id BiglakeTable#id}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.type">type</a></code> | <code>string</code> | The database type. Possible values: ["HIVE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#name BiglakeTable#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The id of the parent database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#database BiglakeTable#database}

---

##### `hiveOptions`<sup>Optional</sup> <a name="hiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.hiveOptions"></a>

```typescript
public readonly hiveOptions: BiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#hive_options BiglakeTable#hive_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#id BiglakeTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#timeouts BiglakeTable#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The database type. Possible values: ["HIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#type BiglakeTable#type}

---

### BiglakeTableHiveOptions <a name="BiglakeTableHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

const biglakeTableHiveOptions: biglakeTable.BiglakeTableHiveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Stores user supplied Hive table parameters. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.tableType">tableType</a></code> | <code>string</code> | Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Stores user supplied Hive table parameters.

An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#parameters BiglakeTable#parameters}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: BiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#storage_descriptor BiglakeTable#storage_descriptor}

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#table_type BiglakeTable#table_type}

---

### BiglakeTableHiveOptionsStorageDescriptor <a name="BiglakeTableHiveOptionsStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

const biglakeTableHiveOptionsStorageDescriptor: biglakeTable.BiglakeTableHiveOptionsStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.locationUri">locationUri</a></code> | <code>string</code> | Cloud Storage folder URI where the table data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the output format. |

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#input_format BiglakeTable#input_format}

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

Cloud Storage folder URI where the table data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#location_uri BiglakeTable#location_uri}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#output_format BiglakeTable#output_format}

---

### BiglakeTableTimeouts <a name="BiglakeTableTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

const biglakeTableTimeouts: biglakeTable.BiglakeTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#create BiglakeTable#create}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#delete BiglakeTable#delete}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#update BiglakeTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#create BiglakeTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#delete BiglakeTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/biglake_table#update BiglakeTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeTableHiveOptionsOutputReference <a name="BiglakeTableHiveOptionsOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

new biglakeTable.BiglakeTableHiveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetTableType">resetTableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: BiglakeTableHiveOptionsStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetStorageDescriptor"></a>

```typescript
public resetStorageDescriptor(): void
```

##### `resetTableType` <a name="resetTableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetTableType"></a>

```typescript
public resetTableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference">BiglakeTableHiveOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableTypeInput">tableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: BiglakeTableHiveOptionsStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference">BiglakeTableHiveOptionsStorageDescriptorOutputReference</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: BiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableTypeInput"></a>

```typescript
public readonly tableTypeInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---


### BiglakeTableHiveOptionsStorageDescriptorOutputReference <a name="BiglakeTableHiveOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

new biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---


### BiglakeTableTimeoutsOutputReference <a name="BiglakeTableTimeoutsOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { biglakeTable } from '@cdktf/provider-google'

new biglakeTable.BiglakeTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

---



