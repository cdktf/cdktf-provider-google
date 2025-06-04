# `networkSecurityInterceptDeploymentGroup` Submodule <a name="`networkSecurityInterceptDeploymentGroup` Submodule" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptDeploymentGroup <a name="NetworkSecurityInterceptDeploymentGroup" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group google_network_security_intercept_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup(scope: Construct, id: string, config: NetworkSecurityInterceptDeploymentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityInterceptDeploymentGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityInterceptDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityInterceptDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups">connectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput">interceptDeploymentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId">interceptDeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectedEndpointGroups`<sup>Required</sup> <a name="connectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups"></a>

```typescript
public readonly connectedEndpointGroups: NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations"></a>

```typescript
public readonly locations: NetworkSecurityInterceptDeploymentGroupLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupIdInput`<sup>Optional</sup> <a name="interceptDeploymentGroupIdInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput"></a>

```typescript
public readonly interceptDeploymentGroupIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupId`<sup>Required</sup> <a name="interceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId"></a>

```typescript
public readonly interceptDeploymentGroupId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptDeploymentGroupConfig <a name="NetworkSecurityInterceptDeploymentGroupConfig" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityInterceptDeploymentGroupConfig: networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId">interceptDeploymentGroupId</a></code> | <code>string</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network">network</a></code> | <code>string</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interceptDeploymentGroupId`<sup>Required</sup> <a name="interceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId"></a>

```typescript
public readonly interceptDeploymentGroupId: string;
```

- *Type:* string

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#intercept_deployment_group_id NetworkSecurityInterceptDeploymentGroup#intercept_deployment_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#location NetworkSecurityInterceptDeploymentGroup#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#network NetworkSecurityInterceptDeploymentGroup#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#description NetworkSecurityInterceptDeploymentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#labels NetworkSecurityInterceptDeploymentGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#timeouts NetworkSecurityInterceptDeploymentGroup#timeouts}

---

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityInterceptDeploymentGroupConnectedEndpointGroups: networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups = { ... }
```


### NetworkSecurityInterceptDeploymentGroupLocations <a name="NetworkSecurityInterceptDeploymentGroupLocations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityInterceptDeploymentGroupLocations: networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations = { ... }
```


### NetworkSecurityInterceptDeploymentGroupTimeouts <a name="NetworkSecurityInterceptDeploymentGroupTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityInterceptDeploymentGroupTimeouts: networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get"></a>

```typescript
public get(index: number): NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a>

---


### NetworkSecurityInterceptDeploymentGroupLocationsList <a name="NetworkSecurityInterceptDeploymentGroupLocationsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get"></a>

```typescript
public get(index: number): NetworkSecurityInterceptDeploymentGroupLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityInterceptDeploymentGroupLocationsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityInterceptDeploymentGroupLocations;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a>

---


### NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

---



