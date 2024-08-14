# `apikeysKey` Submodule <a name="`apikeysKey` Submodule" id="@cdktf/provider-google.apikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApikeysKey <a name="ApikeysKey" id="@cdktf/provider-google.apikeysKey.ApikeysKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKey(scope: Construct, id: string, config: ApikeysKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions">resetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apikeysKey.ApikeysKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions"></a>

```typescript
public putRestrictions(value: ApikeysKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts"></a>

```typescript
public putTimeouts(value: ApikeysKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions"></a>

```typescript
public resetRestrictions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

apikeysKey.ApikeysKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

apikeysKey.ApikeysKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

apikeysKey.ApikeysKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

apikeysKey.ApikeysKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApikeysKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApikeysKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApikeysKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString">keyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyString`<sup>Required</sup> <a name="keyString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString"></a>

```typescript
public readonly keyString: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions"></a>

```typescript
public readonly restrictions: ApikeysKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts"></a>

```typescript
public readonly timeouts: ApikeysKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: ApikeysKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApikeysKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApikeysKeyConfig <a name="ApikeysKeyConfig" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyConfig: apikeysKey.ApikeysKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name">name</a></code> | <code>string</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#id ApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#name ApikeysKey#name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#display_name ApikeysKey#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#id ApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#project ApikeysKey#project}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions"></a>

```typescript
public readonly restrictions: ApikeysKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#restrictions ApikeysKey#restrictions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApikeysKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#timeouts ApikeysKey#timeouts}

---

### ApikeysKeyRestrictions <a name="ApikeysKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictions: apikeysKey.ApikeysKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions">androidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets">apiTargets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]</code> | api_targets block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions">browserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions">iosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions">serverKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `androidKeyRestrictions`<sup>Optional</sup> <a name="androidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```typescript
public readonly androidKeyRestrictions: ApikeysKeyRestrictionsAndroidKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#android_key_restrictions ApikeysKey#android_key_restrictions}

---

##### `apiTargets`<sup>Optional</sup> <a name="apiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets"></a>

```typescript
public readonly apiTargets: IResolvable | ApikeysKeyRestrictionsApiTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#api_targets ApikeysKey#api_targets}

---

##### `browserKeyRestrictions`<sup>Optional</sup> <a name="browserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```typescript
public readonly browserKeyRestrictions: ApikeysKeyRestrictionsBrowserKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#browser_key_restrictions ApikeysKey#browser_key_restrictions}

---

##### `iosKeyRestrictions`<sup>Optional</sup> <a name="iosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```typescript
public readonly iosKeyRestrictions: ApikeysKeyRestrictionsIosKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#ios_key_restrictions ApikeysKey#ios_key_restrictions}

---

##### `serverKeyRestrictions`<sup>Optional</sup> <a name="serverKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```typescript
public readonly serverKeyRestrictions: ApikeysKeyRestrictionsServerKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#server_key_restrictions ApikeysKey#server_key_restrictions}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictions <a name="ApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsAndroidKeyRestrictions: apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">allowedApplications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]</code> | allowed_applications block. |

---

##### `allowedApplications`<sup>Required</sup> <a name="allowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```typescript
public readonly allowedApplications: IResolvable | ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#allowed_applications ApikeysKey#allowed_applications}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications: apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">packageName</a></code> | <code>string</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | The SHA1 fingerprint of the application. |

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The package name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#package_name ApikeysKey#package_name}

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#sha1_fingerprint ApikeysKey#sha1_fingerprint}

---

### ApikeysKeyRestrictionsApiTargets <a name="ApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsApiTargets: apikeysKey.ApikeysKeyRestrictionsApiTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service">service</a></code> | <code>string</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods">methods</a></code> | <code>string[]</code> | Optional. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#service ApikeysKey#service}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#methods ApikeysKey#methods}

---

### ApikeysKeyRestrictionsBrowserKeyRestrictions <a name="ApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsBrowserKeyRestrictions: apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">allowedReferrers</a></code> | <code>string[]</code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `allowedReferrers`<sup>Required</sup> <a name="allowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```typescript
public readonly allowedReferrers: string[];
```

- *Type:* string[]

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#allowed_referrers ApikeysKey#allowed_referrers}

---

### ApikeysKeyRestrictionsIosKeyRestrictions <a name="ApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsIosKeyRestrictions: apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#allowed_bundle_ids ApikeysKey#allowed_bundle_ids}

---

### ApikeysKeyRestrictionsServerKeyRestrictions <a name="ApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyRestrictionsServerKeyRestrictions: apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">allowedIps</a></code> | <code>string[]</code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```typescript
public readonly allowedIps: string[];
```

- *Type:* string[]

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#allowed_ips ApikeysKey#allowed_ips}

---

### ApikeysKeyTimeouts <a name="ApikeysKeyTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

const apikeysKeyTimeouts: apikeysKey.ApikeysKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#create ApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#delete ApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#update ApikeysKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#create ApikeysKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#delete ApikeysKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/apikeys_key#update ApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```typescript
public get(index: number): ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">sha1FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `sha1FingerprintInput`<sup>Optional</sup> <a name="sha1FingerprintInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```typescript
public readonly sha1FingerprintInput: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">putAllowedApplications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedApplications` <a name="putAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```typescript
public putAllowedApplications(value: IResolvable | ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">allowedApplications</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">allowedApplicationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedApplications`<sup>Required</sup> <a name="allowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```typescript
public readonly allowedApplications: ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `allowedApplicationsInput`<sup>Optional</sup> <a name="allowedApplicationsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```typescript
public readonly allowedApplicationsInput: IResolvable | ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApikeysKeyRestrictionsAndroidKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### ApikeysKeyRestrictionsApiTargetsList <a name="ApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsApiTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get"></a>

```typescript
public get(index: number): ApikeysKeyRestrictionsApiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApikeysKeyRestrictionsApiTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]

---


### ApikeysKeyRestrictionsApiTargetsOutputReference <a name="ApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApikeysKeyRestrictionsApiTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>

---


### ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">allowedReferrersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">allowedReferrers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedReferrersInput`<sup>Optional</sup> <a name="allowedReferrersInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```typescript
public readonly allowedReferrersInput: string[];
```

- *Type:* string[]

---

##### `allowedReferrers`<sup>Required</sup> <a name="allowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```typescript
public readonly allowedReferrers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApikeysKeyRestrictionsBrowserKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">allowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedBundleIdsInput`<sup>Optional</sup> <a name="allowedBundleIdsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```typescript
public readonly allowedBundleIdsInput: string[];
```

- *Type:* string[]

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApikeysKeyRestrictionsIosKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### ApikeysKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">putAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets">putApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">putBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">putIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">putServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">resetAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets">resetApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">resetBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">resetIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">resetServerKeyRestrictions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndroidKeyRestrictions` <a name="putAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```typescript
public putAndroidKeyRestrictions(value: ApikeysKeyRestrictionsAndroidKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `putApiTargets` <a name="putApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```typescript
public putApiTargets(value: IResolvable | ApikeysKeyRestrictionsApiTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]

---

##### `putBrowserKeyRestrictions` <a name="putBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```typescript
public putBrowserKeyRestrictions(value: ApikeysKeyRestrictionsBrowserKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `putIosKeyRestrictions` <a name="putIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```typescript
public putIosKeyRestrictions(value: ApikeysKeyRestrictionsIosKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `putServerKeyRestrictions` <a name="putServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```typescript
public putServerKeyRestrictions(value: ApikeysKeyRestrictionsServerKeyRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `resetAndroidKeyRestrictions` <a name="resetAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```typescript
public resetAndroidKeyRestrictions(): void
```

##### `resetApiTargets` <a name="resetApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```typescript
public resetApiTargets(): void
```

##### `resetBrowserKeyRestrictions` <a name="resetBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```typescript
public resetBrowserKeyRestrictions(): void
```

##### `resetIosKeyRestrictions` <a name="resetIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```typescript
public resetIosKeyRestrictions(): void
```

##### `resetServerKeyRestrictions` <a name="resetServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```typescript
public resetServerKeyRestrictions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">androidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets">apiTargets</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">browserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">iosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">serverKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">androidKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">apiTargetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">browserKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">iosKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">serverKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `androidKeyRestrictions`<sup>Required</sup> <a name="androidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```typescript
public readonly androidKeyRestrictions: ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `apiTargets`<sup>Required</sup> <a name="apiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```typescript
public readonly apiTargets: ApikeysKeyRestrictionsApiTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a>

---

##### `browserKeyRestrictions`<sup>Required</sup> <a name="browserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```typescript
public readonly browserKeyRestrictions: ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `iosKeyRestrictions`<sup>Required</sup> <a name="iosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```typescript
public readonly iosKeyRestrictions: ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `serverKeyRestrictions`<sup>Required</sup> <a name="serverKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```typescript
public readonly serverKeyRestrictions: ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `androidKeyRestrictionsInput`<sup>Optional</sup> <a name="androidKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```typescript
public readonly androidKeyRestrictionsInput: ApikeysKeyRestrictionsAndroidKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `apiTargetsInput`<sup>Optional</sup> <a name="apiTargetsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```typescript
public readonly apiTargetsInput: IResolvable | ApikeysKeyRestrictionsApiTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>[]

---

##### `browserKeyRestrictionsInput`<sup>Optional</sup> <a name="browserKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```typescript
public readonly browserKeyRestrictionsInput: ApikeysKeyRestrictionsBrowserKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `iosKeyRestrictionsInput`<sup>Optional</sup> <a name="iosKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```typescript
public readonly iosKeyRestrictionsInput: ApikeysKeyRestrictionsIosKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `serverKeyRestrictionsInput`<sup>Optional</sup> <a name="serverKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```typescript
public readonly serverKeyRestrictionsInput: ApikeysKeyRestrictionsServerKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApikeysKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---


### ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">allowedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">allowedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpsInput`<sup>Optional</sup> <a name="allowedIpsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```typescript
public readonly allowedIpsInput: string[];
```

- *Type:* string[]

---

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```typescript
public readonly allowedIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApikeysKeyRestrictionsServerKeyRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### ApikeysKeyTimeoutsOutputReference <a name="ApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { apikeysKey } from '@cdktf/provider-google'

new apikeysKey.ApikeysKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApikeysKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

---



