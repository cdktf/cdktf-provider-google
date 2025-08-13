# `apigeeEnvironmentAddonsConfig` Submodule <a name="`apigeeEnvironmentAddonsConfig` Submodule" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentAddonsConfig <a name="ApigeeEnvironmentAddonsConfig" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config google_apigee_environment_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

new apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig(scope: Construct, id: string, config: ApigeeEnvironmentAddonsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig">ApigeeEnvironmentAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig">ApigeeEnvironmentAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled">resetAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvironmentAddonsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `resetAnalyticsEnabled` <a name="resetAnalyticsEnabled" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled"></a>

```typescript
public resetAnalyticsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput">analyticsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled">analyticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentAddonsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a>

---

##### `analyticsEnabledInput`<sup>Optional</sup> <a name="analyticsEnabledInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput"></a>

```typescript
public readonly analyticsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvironmentAddonsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `analyticsEnabled`<sup>Required</sup> <a name="analyticsEnabled" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled"></a>

```typescript
public readonly analyticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentAddonsConfigConfig <a name="ApigeeEnvironmentAddonsConfigConfig" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.Initializer"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

const apigeeEnvironmentAddonsConfigConfig: apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled">analyticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#env_id ApigeeEnvironmentAddonsConfig#env_id}

---

##### `analyticsEnabled`<sup>Optional</sup> <a name="analyticsEnabled" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled"></a>

```typescript
public readonly analyticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#analytics_enabled ApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentAddonsConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#timeouts ApigeeEnvironmentAddonsConfig#timeouts}

---

### ApigeeEnvironmentAddonsConfigTimeouts <a name="ApigeeEnvironmentAddonsConfigTimeouts" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.Initializer"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

const apigeeEnvironmentAddonsConfigTimeouts: apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentAddonsConfigTimeoutsOutputReference <a name="ApigeeEnvironmentAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironmentAddonsConfig } from '@cdktf/provider-google'

new apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvironmentAddonsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---



