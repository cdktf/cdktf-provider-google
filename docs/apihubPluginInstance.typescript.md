# `apihubPluginInstance` Submodule <a name="`apihubPluginInstance` Submodule" id="@cdktf/provider-google.apihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubPluginInstance <a name="ApihubPluginInstance" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstance(scope: Construct, id: string, config: ApihubPluginInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig">ApihubPluginInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig">ApihubPluginInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions"></a>

```typescript
public putActions(value: IResolvable | ApihubPluginInstanceActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig"></a>

```typescript
public putAuthConfig(value: ApihubPluginInstanceAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: ApihubPluginInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetAuthConfig"></a>

```typescript
public resetAuthConfig(): void
```

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

apihubPluginInstance.ApihubPluginInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

apihubPluginInstance.ApihubPluginInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

apihubPluginInstance.ApihubPluginInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

apihubPluginInstance.ApihubPluginInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubPluginInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList">ApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference">ApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference">ApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfigInput">authConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInput">pluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceIdInput">pluginInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.plugin">plugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceId">pluginInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actions"></a>

```typescript
public readonly actions: ApihubPluginInstanceActionsList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList">ApihubPluginInstanceActionsList</a>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfig"></a>

```typescript
public readonly authConfig: ApihubPluginInstanceAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference">ApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubPluginInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference">ApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | ApihubPluginInstanceActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: ApihubPluginInstanceAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pluginInput`<sup>Optional</sup> <a name="pluginInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInput"></a>

```typescript
public readonly pluginInput: string;
```

- *Type:* string

---

##### `pluginInstanceIdInput`<sup>Optional</sup> <a name="pluginInstanceIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceIdInput"></a>

```typescript
public readonly pluginInstanceIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApihubPluginInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* string

---

##### `pluginInstanceId`<sup>Required</sup> <a name="pluginInstanceId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceId"></a>

```typescript
public readonly pluginInstanceId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubPluginInstanceActions <a name="ApihubPluginInstanceActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceActions: apihubPluginInstance.ApihubPluginInstanceActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.actionId">actionId</a></code> | <code>string</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.curationConfig">curationConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleCronExpression">scheduleCronExpression</a></code> | <code>string</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleTimeZone">scheduleTimeZone</a></code> | <code>string</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#action_id ApihubPluginInstance#action_id}

---

##### `curationConfig`<sup>Optional</sup> <a name="curationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.curationConfig"></a>

```typescript
public readonly curationConfig: ApihubPluginInstanceActionsCurationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#curation_config ApihubPluginInstance#curation_config}

---

##### `scheduleCronExpression`<sup>Optional</sup> <a name="scheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```typescript
public readonly scheduleCronExpression: string;
```

- *Type:* string

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#schedule_cron_expression ApihubPluginInstance#schedule_cron_expression}

---

##### `scheduleTimeZone`<sup>Optional</sup> <a name="scheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```typescript
public readonly scheduleTimeZone: string;
```

- *Type:* string

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#schedule_time_zone ApihubPluginInstance#schedule_time_zone}

---

### ApihubPluginInstanceActionsCurationConfig <a name="ApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceActionsCurationConfig: apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.curationType">curationType</a></code> | <code>string</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.customCuration">customCuration</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `curationType`<sup>Optional</sup> <a name="curationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```typescript
public readonly curationType: string;
```

- *Type:* string

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#curation_type ApihubPluginInstance#curation_type}

---

##### `customCuration`<sup>Optional</sup> <a name="customCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```typescript
public readonly customCuration: ApihubPluginInstanceActionsCurationConfigCustomCuration;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#custom_curation ApihubPluginInstance#custom_curation}

---

### ApihubPluginInstanceActionsCurationConfigCustomCuration <a name="ApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceActionsCurationConfigCustomCuration: apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">curation</a></code> | <code>string</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```typescript
public readonly curation: string;
```

- *Type:* string

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#curation ApihubPluginInstance#curation}

---

### ApihubPluginInstanceActionsHubInstanceAction <a name="ApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceActionsHubInstanceAction: apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction = { ... }
```


### ApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceActionsHubInstanceActionLastExecution: apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution = { ... }
```


### ApihubPluginInstanceAuthConfig <a name="ApihubPluginInstanceAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfig: apihubPluginInstance.ApihubPluginInstanceAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.authType">authType</a></code> | <code>string</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">googleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.userPasswordConfig">userPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#auth_type ApihubPluginInstance#auth_type}

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: ApihubPluginInstanceAuthConfigApiKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#api_key_config ApihubPluginInstance#api_key_config}

---

##### `googleServiceAccountConfig`<sup>Optional</sup> <a name="googleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```typescript
public readonly googleServiceAccountConfig: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#google_service_account_config ApihubPluginInstance#google_service_account_config}

---

##### `oauth2ClientCredentialsConfig`<sup>Optional</sup> <a name="oauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```typescript
public readonly oauth2ClientCredentialsConfig: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#oauth2_client_credentials_config ApihubPluginInstance#oauth2_client_credentials_config}

---

##### `userPasswordConfig`<sup>Optional</sup> <a name="userPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```typescript
public readonly userPasswordConfig: ApihubPluginInstanceAuthConfigUserPasswordConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#user_password_config ApihubPluginInstance#user_password_config}

---

### ApihubPluginInstanceAuthConfigApiKeyConfig <a name="ApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigApiKeyConfig: apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">httpElementLocation</a></code> | <code>string</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.name">name</a></code> | <code>string</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#api_key ApihubPluginInstance#api_key}

---

##### `httpElementLocation`<sup>Required</sup> <a name="httpElementLocation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```typescript
public readonly httpElementLocation: string;
```

- *Type:* string

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#http_element_location ApihubPluginInstance#http_element_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#name ApihubPluginInstance#name}

---

### ApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="ApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigApiKeyConfigApiKey: apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">secretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigGoogleServiceAccountConfig: apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to be used for authenticating request. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#service_account ApihubPluginInstance#service_account}

---

### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig: apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">clientId</a></code> | <code>string</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#client_id ApihubPluginInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#client_secret ApihubPluginInstance#client_secret}

---

### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret: apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">secretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceAuthConfigUserPasswordConfig <a name="ApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigUserPasswordConfig: apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">password</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">username</a></code> | <code>string</code> | Username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```typescript
public readonly password: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#password ApihubPluginInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#username ApihubPluginInstance#username}

---

### ApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceAuthConfigUserPasswordConfigPassword: apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">secretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceConfig <a name="ApihubPluginInstanceConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceConfig: apihubPluginInstance.ApihubPluginInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.plugin">plugin</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.pluginInstanceId">pluginInstanceId</a></code> | <code>string</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#id ApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#project ApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#display_name ApihubPluginInstance#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#location ApihubPluginInstance#location}

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#plugin ApihubPluginInstance#plugin}

---

##### `pluginInstanceId`<sup>Required</sup> <a name="pluginInstanceId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```typescript
public readonly pluginInstanceId: string;
```

- *Type:* string

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
the specified id is already used by another plugin instance in the plugin
resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#plugin_instance_id ApihubPluginInstance#plugin_instance_id}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | ApihubPluginInstanceActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#actions ApihubPluginInstance#actions}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.authConfig"></a>

```typescript
public readonly authConfig: ApihubPluginInstanceAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#auth_config ApihubPluginInstance#auth_config}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#disable ApihubPluginInstance#disable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#id ApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#project ApihubPluginInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubPluginInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#timeouts ApihubPluginInstance#timeouts}

---

### ApihubPluginInstanceTimeouts <a name="ApihubPluginInstanceTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

const apihubPluginInstanceTimeouts: apihubPluginInstance.ApihubPluginInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#create ApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#delete ApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#update ApihubPluginInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#create ApihubPluginInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#delete ApihubPluginInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin_instance#update ApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">curationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">curation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `curationInput`<sup>Optional</sup> <a name="curationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```typescript
public readonly curationInput: string;
```

- *Type:* string

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```typescript
public readonly curation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceActionsCurationConfigCustomCuration;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### ApihubPluginInstanceActionsCurationConfigOutputReference <a name="ApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">putCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">resetCurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">resetCustomCuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCuration` <a name="putCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```typescript
public putCustomCuration(value: ApihubPluginInstanceActionsCurationConfigCustomCuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `resetCurationType` <a name="resetCurationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```typescript
public resetCurationType(): void
```

##### `resetCustomCuration` <a name="resetCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```typescript
public resetCustomCuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">customCuration</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">curationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">customCurationInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">curationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCuration`<sup>Required</sup> <a name="customCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```typescript
public readonly customCuration: ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `curationTypeInput`<sup>Optional</sup> <a name="curationTypeInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```typescript
public readonly curationTypeInput: string;
```

- *Type:* string

---

##### `customCurationInput`<sup>Optional</sup> <a name="customCurationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```typescript
public readonly customCurationInput: ApihubPluginInstanceActionsCurationConfigCustomCuration;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `curationType`<sup>Required</sup> <a name="curationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```typescript
public readonly curationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceActionsCurationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---


### ApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```typescript
public get(index: number): ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution">ApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceActionsHubInstanceActionLastExecution;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution">ApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### ApihubPluginInstanceActionsHubInstanceActionList <a name="ApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```typescript
public get(index: number): ApihubPluginInstanceActionsHubInstanceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="ApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">currentExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">lastExecution</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList">ApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction">ApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentExecutionState`<sup>Required</sup> <a name="currentExecutionState" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```typescript
public readonly currentExecutionState: string;
```

- *Type:* string

---

##### `lastExecution`<sup>Required</sup> <a name="lastExecution" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```typescript
public readonly lastExecution: ApihubPluginInstanceActionsHubInstanceActionLastExecutionList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList">ApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceActionsHubInstanceAction;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction">ApihubPluginInstanceActionsHubInstanceAction</a>

---


### ApihubPluginInstanceActionsList <a name="ApihubPluginInstanceActionsList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get"></a>

```typescript
public get(index: number): ApihubPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginInstanceActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>[]

---


### ApihubPluginInstanceActionsOutputReference <a name="ApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig">putCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetCurationConfig">resetCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">resetScheduleCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">resetScheduleTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurationConfig` <a name="putCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```typescript
public putCurationConfig(value: ApihubPluginInstanceActionsCurationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---

##### `resetCurationConfig` <a name="resetCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```typescript
public resetCurationConfig(): void
```

##### `resetScheduleCronExpression` <a name="resetScheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```typescript
public resetScheduleCronExpression(): void
```

##### `resetScheduleTimeZone` <a name="resetScheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```typescript
public resetScheduleTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfig">curationConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference">ApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">hubInstanceAction</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList">ApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfigInput">curationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">scheduleCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">scheduleTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">scheduleCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">scheduleTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `curationConfig`<sup>Required</sup> <a name="curationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```typescript
public readonly curationConfig: ApihubPluginInstanceActionsCurationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference">ApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `hubInstanceAction`<sup>Required</sup> <a name="hubInstanceAction" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```typescript
public readonly hubInstanceAction: ApihubPluginInstanceActionsHubInstanceActionList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList">ApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```typescript
public readonly actionIdInput: string;
```

- *Type:* string

---

##### `curationConfigInput`<sup>Optional</sup> <a name="curationConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```typescript
public readonly curationConfigInput: ApihubPluginInstanceActionsCurationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---

##### `scheduleCronExpressionInput`<sup>Optional</sup> <a name="scheduleCronExpressionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```typescript
public readonly scheduleCronExpressionInput: string;
```

- *Type:* string

---

##### `scheduleTimeZoneInput`<sup>Optional</sup> <a name="scheduleTimeZoneInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```typescript
public readonly scheduleTimeZoneInput: string;
```

- *Type:* string

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `scheduleCronExpression`<sup>Required</sup> <a name="scheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```typescript
public readonly scheduleCronExpression: string;
```

- *Type:* string

---

##### `scheduleTimeZone`<sup>Required</sup> <a name="scheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```typescript
public readonly scheduleTimeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginInstanceActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions">ApihubPluginInstanceActions</a>

---


### ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">httpElementLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">httpElementLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `httpElementLocationInput`<sup>Optional</sup> <a name="httpElementLocationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```typescript
public readonly httpElementLocationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `httpElementLocation`<sup>Required</sup> <a name="httpElementLocation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```typescript
public readonly httpElementLocation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigApiKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```typescript
public putClientSecret(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### ApihubPluginInstanceAuthConfigOutputReference <a name="ApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">putGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">putOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">putUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">resetGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">resetOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">resetUserPasswordConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: ApihubPluginInstanceAuthConfigApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `putGoogleServiceAccountConfig` <a name="putGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```typescript
public putGoogleServiceAccountConfig(value: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `putOauth2ClientCredentialsConfig` <a name="putOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```typescript
public putOauth2ClientCredentialsConfig(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `putUserPasswordConfig` <a name="putUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```typescript
public putUserPasswordConfig(value: ApihubPluginInstanceAuthConfigUserPasswordConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetGoogleServiceAccountConfig` <a name="resetGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```typescript
public resetGoogleServiceAccountConfig(): void
```

##### `resetOauth2ClientCredentialsConfig` <a name="resetOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```typescript
public resetOauth2ClientCredentialsConfig(): void
```

##### `resetUserPasswordConfig` <a name="resetUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```typescript
public resetUserPasswordConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">googleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">userPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">googleServiceAccountConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">oauth2ClientCredentialsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">userPasswordConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `googleServiceAccountConfig`<sup>Required</sup> <a name="googleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```typescript
public readonly googleServiceAccountConfig: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `oauth2ClientCredentialsConfig`<sup>Required</sup> <a name="oauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```typescript
public readonly oauth2ClientCredentialsConfig: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `userPasswordConfig`<sup>Required</sup> <a name="userPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```typescript
public readonly userPasswordConfig: ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: ApihubPluginInstanceAuthConfigApiKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `googleServiceAccountConfigInput`<sup>Optional</sup> <a name="googleServiceAccountConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```typescript
public readonly googleServiceAccountConfigInput: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `oauth2ClientCredentialsConfigInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```typescript
public readonly oauth2ClientCredentialsConfigInput: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `userPasswordConfigInput`<sup>Optional</sup> <a name="userPasswordConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```typescript
public readonly userPasswordConfigInput: ApihubPluginInstanceAuthConfigUserPasswordConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---


### ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">putPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```typescript
public putPassword(value: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">password</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```typescript
public readonly password: ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigUserPasswordConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### ApihubPluginInstanceTimeoutsOutputReference <a name="ApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { apihubPluginInstance } from '@cdktf/provider-google'

new apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

---



