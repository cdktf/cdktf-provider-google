# `sccOrganizationCustomModule` Submodule <a name="`sccOrganizationCustomModule` Submodule" id="@cdktf/provider-google.sccOrganizationCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccOrganizationCustomModule <a name="SccOrganizationCustomModule" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module google_scc_organization_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModule(scope: Construct, id: string, config: SccOrganizationCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig">SccOrganizationCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig">SccOrganizationCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putCustomConfig"></a>

```typescript
public putCustomConfig(value: SccOrganizationCustomModuleCustomConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: SccOrganizationCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccOrganizationCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isConstruct"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

sccOrganizationCustomModule.SccOrganizationCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformElement"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformResource"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccOrganizationCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccOrganizationCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccOrganizationCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccOrganizationCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference">SccOrganizationCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference">SccOrganizationCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.ancestorModule"></a>

```typescript
public readonly ancestorModule: string;
```

- *Type:* string

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.customConfig"></a>

```typescript
public readonly customConfig: SccOrganizationCustomModuleCustomConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference">SccOrganizationCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: SccOrganizationCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference">SccOrganizationCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.customConfigInput"></a>

```typescript
public readonly customConfigInput: SccOrganizationCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccOrganizationCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccOrganizationCustomModuleConfig <a name="SccOrganizationCustomModuleConfig" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleConfig: sccOrganizationCustomModule.SccOrganizationCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#id SccOrganizationCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.customConfig"></a>

```typescript
public readonly customConfig: SccOrganizationCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#custom_config SccOrganizationCustomModule#custom_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#display_name SccOrganizationCustomModule#display_name}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#enablement_state SccOrganizationCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#organization SccOrganizationCustomModule#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#id SccOrganizationCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccOrganizationCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#timeouts SccOrganizationCustomModule#timeouts}

---

### SccOrganizationCustomModuleCustomConfig <a name="SccOrganizationCustomModuleCustomConfig" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfig: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.severity">severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.description">description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.predicate"></a>

```typescript
public readonly predicate: SccOrganizationCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#predicate SccOrganizationCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#recommendation SccOrganizationCustomModule#recommendation}

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: SccOrganizationCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#resource_selector SccOrganizationCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#severity SccOrganizationCustomModule#severity}

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.customOutput"></a>

```typescript
public readonly customOutput: SccOrganizationCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#custom_output SccOrganizationCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#description SccOrganizationCustomModule#description}

---

### SccOrganizationCustomModuleCustomConfigCustomOutput <a name="SccOrganizationCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfigCustomOutput: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput.property.properties"></a>

```typescript
public readonly properties: IResolvable | SccOrganizationCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#properties SccOrganizationCustomModule#properties}

---

### SccOrganizationCustomModuleCustomConfigCustomOutputProperties <a name="SccOrganizationCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfigCustomOutputProperties: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#name SccOrganizationCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```typescript
public readonly valueExpression: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#value_expression SccOrganizationCustomModule#value_expression}

---

### SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#expression SccOrganizationCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#description SccOrganizationCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#location SccOrganizationCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#title SccOrganizationCustomModule#title}

---

### SccOrganizationCustomModuleCustomConfigPredicate <a name="SccOrganizationCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfigPredicate: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#expression SccOrganizationCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#description SccOrganizationCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#location SccOrganizationCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#title SccOrganizationCustomModule#title}

---

### SccOrganizationCustomModuleCustomConfigResourceSelector <a name="SccOrganizationCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleCustomConfigResourceSelector: sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#resource_types SccOrganizationCustomModule#resource_types}

---

### SccOrganizationCustomModuleTimeouts <a name="SccOrganizationCustomModuleTimeouts" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

const sccOrganizationCustomModuleTimeouts: sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#create SccOrganizationCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#delete SccOrganizationCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#update SccOrganizationCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#create SccOrganizationCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#delete SccOrganizationCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_organization_custom_module#update SccOrganizationCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference <a name="SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | SccOrganizationCustomModuleCustomConfigCustomOutputProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```typescript
public readonly properties: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | SccOrganizationCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccOrganizationCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a>

---


### SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```typescript
public get(index: number): SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccOrganizationCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>[]

---


### SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```typescript
public putValueExpression(value: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```typescript
public resetValueExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```typescript
public readonly valueExpression: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```typescript
public readonly valueExpressionInput: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccOrganizationCustomModuleCustomConfigCustomOutputProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputProperties">SccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>

---


### SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccOrganizationCustomModuleCustomConfigOutputReference <a name="SccOrganizationCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```typescript
public putCustomOutput(value: SccOrganizationCustomModuleCustomConfigCustomOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putPredicate"></a>

```typescript
public putPredicate(value: SccOrganizationCustomModuleCustomConfigPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```typescript
public putResourceSelector(value: SccOrganizationCustomModuleCustomConfigResourceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```typescript
public resetCustomOutput(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference">SccOrganizationCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```typescript
public readonly customOutput: SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">SccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.predicate"></a>

```typescript
public readonly predicate: SccOrganizationCustomModuleCustomConfigPredicateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference">SccOrganizationCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```typescript
public readonly customOutputInput: SccOrganizationCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigCustomOutput">SccOrganizationCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```typescript
public readonly predicateInput: SccOrganizationCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```typescript
public readonly recommendationInput: string;
```

- *Type:* string

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```typescript
public readonly resourceSelectorInput: SccOrganizationCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccOrganizationCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfig">SccOrganizationCustomModuleCustomConfig</a>

---


### SccOrganizationCustomModuleCustomConfigPredicateOutputReference <a name="SccOrganizationCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccOrganizationCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigPredicate">SccOrganizationCustomModuleCustomConfigPredicate</a>

---


### SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccOrganizationCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleCustomConfigResourceSelector">SccOrganizationCustomModuleCustomConfigResourceSelector</a>

---


### SccOrganizationCustomModuleTimeoutsOutputReference <a name="SccOrganizationCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccOrganizationCustomModule } from '@cdktf/provider-google'

new sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccOrganizationCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccOrganizationCustomModule.SccOrganizationCustomModuleTimeouts">SccOrganizationCustomModuleTimeouts</a>

---



