# `dataplexZone` Submodule <a name="`dataplexZone` Submodule" id="@cdktf/provider-google.dataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexZone <a name="DataplexZone" id="@cdktf/provider-google.dataplexZone.DataplexZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZone(scope: Construct, id: string, config: DataplexZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig">DataplexZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig">DataplexZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec">putDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec">putResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataplexZone.DataplexZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataplexZone.DataplexZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataplexZone.DataplexZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataplexZone.DataplexZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexZone.DataplexZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataplexZone.DataplexZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataplexZone.DataplexZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexZone.DataplexZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoverySpec` <a name="putDiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec"></a>

```typescript
public putDiscoverySpec(value: DataplexZoneDiscoverySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `putResourceSpec` <a name="putResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec"></a>

```typescript
public putResourceSpec(value: DataplexZoneResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexZoneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

dataplexZone.DataplexZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

dataplexZone.DataplexZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

dataplexZone.DataplexZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

dataplexZone.DataplexZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataplexZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.assetStatus">assetStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput">discoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lakeInput">lakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput">resourceSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lake">lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetStatus`<sup>Required</sup> <a name="assetStatus" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.assetStatus"></a>

```typescript
public readonly assetStatus: DataplexZoneAssetStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpec"></a>

```typescript
public readonly discoverySpec: DataplexZoneDiscoverySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpec"></a>

```typescript
public readonly resourceSpec: DataplexZoneResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexZoneTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoverySpecInput`<sup>Optional</sup> <a name="discoverySpecInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput"></a>

```typescript
public readonly discoverySpecInput: DataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lakeInput`<sup>Optional</sup> <a name="lakeInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lakeInput"></a>

```typescript
public readonly lakeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceSpecInput`<sup>Optional</sup> <a name="resourceSpecInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput"></a>

```typescript
public readonly resourceSpecInput: DataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexZoneAssetStatus <a name="DataplexZoneAssetStatus" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneAssetStatus: dataplexZone.DataplexZoneAssetStatus = { ... }
```


### DataplexZoneConfig <a name="DataplexZoneConfig" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneConfig: dataplexZone.DataplexZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lake">lake</a></code> | <code>string</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.name">name</a></code> | <code>string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.type">type</a></code> | <code>string</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#id DataplexZone#id}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec"></a>

```typescript
public readonly discoverySpec: DataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#discovery_spec DataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#lake DataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#location DataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#name DataplexZone#name}

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec"></a>

```typescript
public readonly resourceSpec: DataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#resource_spec DataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#type DataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#description DataplexZone#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#display_name DataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#id DataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#labels DataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#project DataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexZoneTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#timeouts DataplexZone#timeouts}

---

### DataplexZoneDiscoverySpec <a name="DataplexZoneDiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneDiscoverySpec: dataplexZone.DataplexZoneDiscoverySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns">excludePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns">includePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule">schedule</a></code> | <code>string</code> | Optional. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#enabled DataplexZone#enabled}

---

##### `csvOptions`<sup>Optional</sup> <a name="csvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions"></a>

```typescript
public readonly csvOptions: DataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#csv_options DataplexZone#csv_options}

---

##### `excludePatterns`<sup>Optional</sup> <a name="excludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns"></a>

```typescript
public readonly excludePatterns: string[];
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#exclude_patterns DataplexZone#exclude_patterns}

---

##### `includePatterns`<sup>Optional</sup> <a name="includePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns"></a>

```typescript
public readonly includePatterns: string[];
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#include_patterns DataplexZone#include_patterns}

---

##### `jsonOptions`<sup>Optional</sup> <a name="jsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions"></a>

```typescript
public readonly jsonOptions: DataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#json_options DataplexZone#json_options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#schedule DataplexZone#schedule}

---

### DataplexZoneDiscoverySpecCsvOptions <a name="DataplexZoneDiscoverySpecCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneDiscoverySpecCsvOptions: dataplexZone.DataplexZoneDiscoverySpecCsvOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter">delimiter</a></code> | <code>string</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding">encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows">headerRows</a></code> | <code>number</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#delimiter DataplexZone#delimiter}

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#encoding DataplexZone#encoding}

---

##### `headerRows`<sup>Optional</sup> <a name="headerRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```typescript
public readonly headerRows: number;
```

- *Type:* number

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#header_rows DataplexZone#header_rows}

---

### DataplexZoneDiscoverySpecJsonOptions <a name="DataplexZoneDiscoverySpecJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneDiscoverySpecJsonOptions: dataplexZone.DataplexZoneDiscoverySpecJsonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding">encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#encoding DataplexZone#encoding}

---

### DataplexZoneResourceSpec <a name="DataplexZoneResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneResourceSpec: dataplexZone.DataplexZoneResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType">locationType</a></code> | <code>string</code> | Required. |

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#location_type DataplexZone#location_type}

---

### DataplexZoneTimeouts <a name="DataplexZoneTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

const dataplexZoneTimeouts: dataplexZone.DataplexZoneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#create DataplexZone#create}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#delete DataplexZone#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#update DataplexZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#create DataplexZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#delete DataplexZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataplex_zone#update DataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexZoneAssetStatusList <a name="DataplexZoneAssetStatusList" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneAssetStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get"></a>

```typescript
public get(index: number): DataplexZoneAssetStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataplexZoneAssetStatusOutputReference <a name="DataplexZoneAssetStatusOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneAssetStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets">activeAssets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">securityPolicyApplyingAssets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeAssets`<sup>Required</sup> <a name="activeAssets" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```typescript
public readonly activeAssets: number;
```

- *Type:* number

---

##### `securityPolicyApplyingAssets`<sup>Required</sup> <a name="securityPolicyApplyingAssets" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```typescript
public readonly securityPolicyApplyingAssets: number;
```

- *Type:* number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexZoneAssetStatus;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a>

---


### DataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="DataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">resetHeaderRows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```typescript
public resetDisableTypeInference(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetHeaderRows` <a name="resetHeaderRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```typescript
public resetHeaderRows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">headerRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">headerRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```typescript
public readonly disableTypeInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `headerRowsInput`<sup>Optional</sup> <a name="headerRowsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```typescript
public readonly headerRowsInput: number;
```

- *Type:* number

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `headerRows`<sup>Required</sup> <a name="headerRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```typescript
public readonly headerRows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---


### DataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="DataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```typescript
public resetDisableTypeInference(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```typescript
public readonly disableTypeInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---


### DataplexZoneDiscoverySpecOutputReference <a name="DataplexZoneDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneDiscoverySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions">putCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions">putJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions">resetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">resetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">resetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions">resetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsvOptions` <a name="putCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```typescript
public putCsvOptions(value: DataplexZoneDiscoverySpecCsvOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `putJsonOptions` <a name="putJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```typescript
public putJsonOptions(value: DataplexZoneDiscoverySpecJsonOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `resetCsvOptions` <a name="resetCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```typescript
public resetCsvOptions(): void
```

##### `resetExcludePatterns` <a name="resetExcludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```typescript
public resetExcludePatterns(): void
```

##### `resetIncludePatterns` <a name="resetIncludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```typescript
public resetIncludePatterns(): void
```

##### `resetJsonOptions` <a name="resetJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```typescript
public resetJsonOptions(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">csvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">excludePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">includePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">jsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns">excludePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns">includePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvOptions`<sup>Required</sup> <a name="csvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```typescript
public readonly csvOptions: DataplexZoneDiscoverySpecCsvOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `jsonOptions`<sup>Required</sup> <a name="jsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```typescript
public readonly jsonOptions: DataplexZoneDiscoverySpecJsonOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `csvOptionsInput`<sup>Optional</sup> <a name="csvOptionsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```typescript
public readonly csvOptionsInput: DataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludePatternsInput`<sup>Optional</sup> <a name="excludePatternsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```typescript
public readonly excludePatternsInput: string[];
```

- *Type:* string[]

---

##### `includePatternsInput`<sup>Optional</sup> <a name="includePatternsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```typescript
public readonly includePatternsInput: string[];
```

- *Type:* string[]

---

##### `jsonOptionsInput`<sup>Optional</sup> <a name="jsonOptionsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```typescript
public readonly jsonOptionsInput: DataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludePatterns`<sup>Required</sup> <a name="excludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```typescript
public readonly excludePatterns: string[];
```

- *Type:* string[]

---

##### `includePatterns`<sup>Required</sup> <a name="includePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```typescript
public readonly includePatterns: string[];
```

- *Type:* string[]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---


### DataplexZoneResourceSpecOutputReference <a name="DataplexZoneResourceSpecOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---


### DataplexZoneTimeoutsOutputReference <a name="DataplexZoneTimeoutsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexZone } from '@cdktf/provider-google'

new dataplexZone.DataplexZoneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---



